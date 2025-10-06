// Task type frameworks with phases
const TASK_FRAMEWORKS = {
  '施策の立案': {
    input: [],
    progress: [],
    output: []
  },
  '課題の解決': {
    input: [],
    progress: [],
    output: []
  },
  'アクションの訴求': {
    input: [],
    progress: [],
    output: []
  },
  '比較検討': {
    input: [],
    progress: [],
    output: []
  },
  'リサーチ': {
    input: [],
    progress: [],
    output: []
  },
  'プロジェクト計画・運営': {
    input: [],
    progress: [],
    output: []
  },
  'ナレッジ化': {
    input: [],
    progress: [],
    output: []
  }
};

import { fetchJSON, putJSON } from './api.js';
import { createElement, clearElement, formatDate, showModal, hideModal } from './dom.js';

let currentTask = null;
let currentPhase = 'input';

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
  const framework = TASK_FRAMEWORKS[currentTask.taskType];
  if (!framework) {
    document.querySelector('.phase-container').style.display = 'none';
    return;
  }
  
  document.getElementById('framework-type').textContent = currentTask.taskType;
  
  // Render phase tabs
  const nav = document.getElementById('phase-nav');
  clearElement(nav);
  
  const phaseNames = {
    input: 'Input',
    progress: 'Progress', 
    output: 'Output'
  };
  
  ['input', 'progress', 'output'].forEach(phase => {
    const tab = createElement('button', {
      className: `phase-tab ${phase === currentPhase ? 'active' : ''}`,
      onClick: () => switchPhase(phase)
    }, [phaseNames[phase]]);
    nav.appendChild(tab);
  });
  
  renderPhaseContent();
}

function renderPhaseContent() {
  const container = document.getElementById('phase-content-container');
  clearElement(container);
  
  const framework = TASK_FRAMEWORKS[currentTask.taskType];
  if (!framework) return;
  
  const items = framework[currentPhase];
  if (!items) return;
  
  // Initialize phases if not exists
  if (!currentTask.phases) {
    currentTask.phases = {
      input: { completed: false, items: {} },
      progress: { completed: false, items: {} },
      output: { completed: false, items: {} }
    };
  }
  
  const phaseData = currentTask.phases[currentPhase];
  
  const content = createElement('div', { className: 'phase-content active' }, []);
  
  // If no items in this phase, show message
  if (items.length === 0) {
    content.appendChild(createElement('p', { 
      style: 'color: #64748b; padding: 2rem; text-align: center;' 
    }, [
      'このフェーズにはまだ項目が設定されていません。'
    ]));
    container.appendChild(content);
    return;
  }
  
  const checklist = createElement('ul', { className: 'checklist' }, []);
  
  items.forEach((item, idx) => {
    const itemKey = `item_${idx}`;
    const itemData = phaseData.items[itemKey] || { checked: false, note: '' };
    
    const checkbox = createElement('input', {
      type: 'checkbox',
      checked: !!itemData.checked,
      onChange: (e) => {
        phaseData.items[itemKey] = {
          ...itemData,
          checked: e.target.checked
        };
        saveTask();
      }
    });
    
    const textarea = createElement('textarea', {
      placeholder: 'Notes...',
      onBlur: (e) => {
        phaseData.items[itemKey] = {
          ...itemData,
          note: e.target.value
        };
        saveTask();
      }
    });
    textarea.value = itemData.note || '';
    
    const li = createElement('li', {}, [
      createElement('div', { className: 'checklist-header' }, [
        checkbox,
        createElement('div', { style: 'flex: 1;' }, [item])
      ]),
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

function switchPhase(phase) {
  currentPhase = phase;
  
  // Update active tab
  document.querySelectorAll('.phase-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');
  
  renderPhaseContent();
}

function completePhase() {
  if (!currentTask.phases) return;
  
  currentTask.phases[currentPhase].completed = true;
  
  // Move to next phase
  if (currentPhase === 'input') {
    currentPhase = 'progress';
  } else if (currentPhase === 'progress') {
    currentPhase = 'output';
  } else {
    alert('すべてのフェーズが完了しました!');
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
      currentTask.phases = {
        input: { completed: false, items: {} },
        progress: { completed: false, items: {} },
        output: { completed: false, items: {} }
      };
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
