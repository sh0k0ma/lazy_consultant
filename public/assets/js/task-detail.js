import { TASK_FRAMEWORKS } from './task-frameworks.js';
import { fetchJSON, putJSON } from './api.js';
import { createElement, clearElement, formatDate, showModal, hideModal } from './dom.js';

let currentTask = null;
let currentPhaseId = null;

function ensurePhaseState(task, framework) {
  if (!framework || !framework.phases || framework.phases.length === 0) {
    return;
  }

  const phaseIds = framework.phases.map(phase => phase.id);
  const legacyKeys = ['input', 'progress', 'output'];

  if (!task.phases || Array.isArray(task.phases) || Object.keys(task.phases).some(key => legacyKeys.includes(key))) {
    task.phases = {};
  }

  phaseIds.forEach(id => {
    if (!task.phases[id]) {
      task.phases[id] = { completed: false, items: {} };
    }
    if (typeof task.phases[id].items !== 'object' || task.phases[id].items === null) {
      task.phases[id].items = {};
    }
  });

  Object.keys(task.phases).forEach(key => {
    if (!phaseIds.includes(key)) {
      delete task.phases[key];
    }
  });
}

function buildInfoSection(title, data) {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return null;
  }

  const section = createElement('div', { className: 'phase-info-section' }, [
    createElement('h4', {}, [title])
  ]);

  if (Array.isArray(data)) {
    const list = createElement('ul', {}, data.map(item => createElement('li', {}, [item])));
    section.appendChild(list);
  } else {
    section.appendChild(createElement('p', {}, [data]));
  }

  return section;
}

async function init() {
  const params = new URLSearchParams(window.location.search);
  const taskId = params.get('id');
  
  if (!taskId) {
    alert('タスクIDが見つかりません');
    window.location.href = '/';
    return;
  }
  
  try {
    const tasks = await fetchJSON('/api/tasks');
    currentTask = tasks.find(t => t.id === taskId);
    
    if (!currentTask) {
      alert('タスクが見つかりません');
      window.location.href = '/';
      return;
    }
    
    renderTaskDetail();
    setupEventListeners();
  } catch (err) {
    console.error('Failed to load task:', err);
    alert('タスクの読み込みに失敗しました');
  }
}

function renderTaskDetail() {
  document.getElementById('task-name').textContent = currentTask.name;
  document.getElementById('task-status').textContent = currentTask.status;
  document.getElementById('task-status').className = `status-badge status-${currentTask.status}`;
  
  // Display field values (no inline editing)
  document.getElementById('task-purpose').textContent = currentTask.purpose || '-';
  document.getElementById('task-type').textContent = currentTask.taskType || '-';
  document.getElementById('task-stakeholders').textContent = currentTask.stakeholders || '-';
  document.getElementById('task-start').textContent = formatDate(currentTask.startDate);
  document.getElementById('task-end').textContent = formatDate(currentTask.endDate);

  currentPhaseId = null;
  renderJournals();
  renderTaskFramework();
}

function renderJournals() {
  const container = document.getElementById('journals-container');
  clearElement(container);
  
  if (!currentTask.journals || currentTask.journals.length === 0) {
    container.appendChild(createElement('p', { style: 'color: #64748b;' }, [
      'No journal entries yet.'
    ]));
    return;
  }
  
  // Sort journals by date (newest first)
  const sortedJournals = [...currentTask.journals].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  sortedJournals.forEach((journal, index) => {
    const dateEl = createElement('div', { 
      className: 'journal-date',
      style: 'cursor: pointer;',
      title: 'クリックして日付を編集'
    }, [formatDate(journal.date)]);
    
    dateEl.onclick = async () => {
      const input = document.createElement('input');
      input.type = 'date';
      input.value = journal.date.split('T')[0];
      input.className = 'inline-edit-input';
      
      dateEl.textContent = '';
      dateEl.appendChild(input);
      input.focus();
      
      const saveDate = async () => {
        const actualIndex = currentTask.journals.findIndex(j => j.date === journal.date && j.entry === journal.entry);
        if (actualIndex !== -1) {
          currentTask.journals[actualIndex].date = new Date(input.value).toISOString();
          await saveTask();
          renderJournals();
        }
      };
      
      input.onblur = saveDate;
      input.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          saveDate();
        } else if (e.key === 'Escape') {
          renderJournals();
        }
      };
    };
    
    const entry = createElement('div', { className: 'journal-entry' }, [
      dateEl,
      createElement('div', { className: 'journal-text' }, [journal.entry])
    ]);
    container.appendChild(entry);
  });
}

function renderTaskFramework() {
  const phaseContainer = document.querySelector('.phase-container');
  const framework = TASK_FRAMEWORKS[currentTask.taskType];

  if (!phaseContainer) {
    return;
  }

  if (!framework || !framework.phases || framework.phases.length === 0) {
    phaseContainer.style.display = 'none';
    return;
  }

  phaseContainer.style.display = '';
  document.getElementById('framework-type').textContent = currentTask.taskType;

  ensurePhaseState(currentTask, framework);

  if (!currentPhaseId || !framework.phases.some(phase => phase.id === currentPhaseId)) {
    const firstIncomplete = framework.phases.find(phase => !currentTask.phases[phase.id]?.completed);
    currentPhaseId = (firstIncomplete || framework.phases[0]).id;
  }

  const nav = document.getElementById('phase-nav');
  clearElement(nav);

  framework.phases.forEach(phase => {
    const tab = createElement('button', {
      className: `phase-tab ${phase.id === currentPhaseId ? 'active' : ''}`,
      onClick: () => switchPhase(phase.id)
    }, [phase.name]);
    nav.appendChild(tab);
  });

  renderPhaseContent();
}

function renderPhaseContent() {
  const container = document.getElementById('phase-content-container');
  clearElement(container);

  const framework = TASK_FRAMEWORKS[currentTask.taskType];
  if (!framework) return;

  ensurePhaseState(currentTask, framework);

  const phaseDefinition = framework.phases.find(phase => phase.id === currentPhaseId);
  if (!phaseDefinition) return;

  const phaseState = currentTask.phases[phaseDefinition.id];
  const content = createElement('div', { className: 'phase-content active' }, []);

  const infoSections = [
    buildInfoSection('目的', phaseDefinition.purpose),
    buildInfoSection('使用視点', phaseDefinition.perspectives),
    buildInfoSection('使用フレームワーク', phaseDefinition.frameworks),
    buildInfoSection('補足ポイント', phaseDefinition.points)
  ].filter(Boolean);

  if (infoSections.length > 0) {
    content.appendChild(createElement('div', { className: 'phase-info' }, infoSections));
  }

  if (!phaseDefinition.tasks || phaseDefinition.tasks.length === 0) {
    content.appendChild(createElement('p', {
      style: 'color: #64748b; padding: 2rem; text-align: center;'
    }, ['このフェーズにはまだ項目が設定されていません。']));
    container.appendChild(content);
    return;
  }

  const checklist = createElement('ul', { className: 'checklist' }, []);

  phaseDefinition.tasks.forEach((taskText, idx) => {
    const itemKey = `item_${idx}`;
    const currentItem = phaseState.items[itemKey] || { checked: false, note: '' };
    if (!phaseState.items[itemKey]) {
      phaseState.items[itemKey] = { ...currentItem };
    }

    const checkbox = createElement('input', {
      type: 'checkbox',
      checked: !!currentItem.checked,
      onChange: (e) => {
        phaseState.items[itemKey] = {
          ...phaseState.items[itemKey],
          checked: e.target.checked,
          note: phaseState.items[itemKey]?.note ?? currentItem.note ?? ''
        };
        saveTask();
      }
    });

    const label = createElement('div', { className: 'checklist-label', style: 'flex: 1;' }, [`${idx + 1}. ${taskText}`]);

    const textarea = createElement('textarea', {
      placeholder: 'この項目に関する具体的な内容を記入してください（メモや次のアクションなど）。',
      onInput: (e) => {
        phaseState.items[itemKey] = {
          ...phaseState.items[itemKey],
          note: e.target.value,
          checked: phaseState.items[itemKey]?.checked ?? currentItem.checked ?? false
        };
      },
      onBlur: (e) => {
        phaseState.items[itemKey] = {
          ...phaseState.items[itemKey],
          note: e.target.value
        };
        saveTask();
      }
    });
    textarea.value = currentItem.note || '';

    const li = createElement('li', {}, [
      createElement('div', { className: 'checklist-header' }, [checkbox, label]),
      textarea
    ]);

    checklist.appendChild(li);
  });

  content.appendChild(checklist);

  const actions = createElement('div', { className: 'phase-actions' }, [
    createElement('button', {
      className: 'btn btn-primary',
      onClick: () => completePhase()
    }, ['フェーズを完了'])
  ]);

  content.appendChild(actions);
  container.appendChild(content);
}

function switchPhase(phaseId) {
  currentPhaseId = phaseId;
  renderTaskFramework();
}

function completePhase() {
  const framework = TASK_FRAMEWORKS[currentTask.taskType];
  if (!framework) return;

  ensurePhaseState(currentTask, framework);

  if (!currentTask.phases || !currentTask.phases[currentPhaseId]) return;

  currentTask.phases[currentPhaseId].completed = true;

  const currentIndex = framework.phases.findIndex(phase => phase.id === currentPhaseId);
  if (currentIndex !== -1) {
    const remaining = framework.phases.slice(currentIndex + 1).find(phase => !currentTask.phases[phase.id]?.completed);
    if (remaining) {
      currentPhaseId = remaining.id;
    } else if (currentIndex < framework.phases.length - 1) {
      currentPhaseId = framework.phases[currentIndex + 1].id;
    } else {
      alert('すべてのフェーズが完了しました!');
    }
  }

  saveTask();
  renderTaskFramework();
}

async function saveTask() {
  try {
    await putJSON(`/api/tasks/${currentTask.id}`, currentTask);
  } catch (err) {
    console.error('Failed to save task:', err);
  }
}

function setupEventListeners() {
  document.getElementById('back-btn').addEventListener('click', () => {
    window.history.back();
  });
  
  document.getElementById('edit-task-btn').addEventListener('click', () => {
    const form = document.getElementById('edit-task-form');
    form.elements.id.value = currentTask.id;
    form.elements.purpose.value = currentTask.purpose || '';
    form.elements.taskType.value = currentTask.taskType;
    form.elements.stakeholders.value = currentTask.stakeholders || '';
    form.elements.startDate.value = currentTask.startDate;
    form.elements.endDate.value = currentTask.endDate;
    showModal('edit-task-modal');
  });
  
  document.getElementById('edit-task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const oldTaskType = currentTask.taskType;
    const newTaskType = e.target.elements.taskType.value;
    
    // Check if task type changed
    if (oldTaskType !== newTaskType) {
      if (!confirm('タスクタイプを変更すると、すべてのフェーズデータがリセットされます。続行しますか?')) {
        return;
      }
      currentTask.phases = {};
      currentPhaseId = null;
    }
    
    currentTask.purpose = e.target.elements.purpose.value;
    currentTask.taskType = newTaskType;
    currentTask.stakeholders = e.target.elements.stakeholders.value;
    currentTask.startDate = e.target.elements.startDate.value;
    currentTask.endDate = e.target.elements.endDate.value;
    
    await saveTask();
    renderTaskDetail();
    hideModal('edit-task-modal');
  });
  
  document.getElementById('cancel-edit-task').addEventListener('click', () => {
    hideModal('edit-task-modal');
  });
  
  document.getElementById('add-journal-btn').addEventListener('click', () => {
    showModal('journal-modal');
  });
  
  document.getElementById('journal-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const entry = e.target.elements.entry.value;
    
    if (!currentTask.journals) {
      currentTask.journals = [];
    }
    
    currentTask.journals.push({
      date: new Date().toISOString(),
      entry
    });
    
    await saveTask();
    renderJournals();
    hideModal('journal-modal');
    e.target.reset();
  });
  
  document.getElementById('cancel-journal').addEventListener('click', () => {
    hideModal('journal-modal');
  });
  
  // Close modal handlers
  document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) modal.classList.remove('show');
    });
  });
  
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', init);
