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
    // Ensure each item has a todos array
    Object.keys(task.phases[id].items).forEach(itemKey => {
      if (!task.phases[id].items[itemKey].todos) {
        task.phases[id].items[itemKey].todos = [];
      }
    });
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
  
  // Set status selector
  const statusSelect = document.getElementById('task-status-select');
  statusSelect.value = currentTask.status;
  
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
  
  // Show only the most recent entry
  const newestJournal = sortedJournals[0];
  const olderJournals = sortedJournals.slice(1);
  
  // Render the newest entry
  const newestEntry = createJournalEntry(newestJournal);
  container.appendChild(newestEntry);
  
  // If there are older entries, add an accordion toggle
  if (olderJournals.length > 0) {
    const toggleBtn = createElement('button', {
      className: 'journal-toggle',
      onClick: (e) => {
        const oldEntriesContainer = e.target.nextElementSibling;
        const isExpanded = oldEntriesContainer.style.display === 'block';
        oldEntriesContainer.style.display = isExpanded ? 'none' : 'block';
        e.target.textContent = isExpanded 
          ? `▶ 過去のジャーナル (${olderJournals.length}件) を表示` 
          : `▼ 過去のジャーナル (${olderJournals.length}件) を非表示`;
      }
    }, [`▶ 過去のジャーナル (${olderJournals.length}件) を表示`]);
    
    const oldEntriesContainer = createElement('div', {
      className: 'journal-older-entries',
      style: 'display: none;'
    }, []);
    
    olderJournals.forEach(journal => {
      oldEntriesContainer.appendChild(createJournalEntry(journal));
    });
    
    container.appendChild(toggleBtn);
    container.appendChild(oldEntriesContainer);
  }
}

function createJournalEntry(journal) {
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
  
  return createElement('div', { className: 'journal-entry' }, [
    dateEl,
    createElement('div', { className: 'journal-text' }, [journal.entry])
  ]);
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
    buildInfoSection('視点', phaseDefinition.perspectives),
    buildInfoSection('フレームワーク', phaseDefinition.frameworks),
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
    const currentItem = phaseState.items[itemKey] || { checked: false, note: '', todos: [] };
    if (!phaseState.items[itemKey]) {
      phaseState.items[itemKey] = { ...currentItem };
    }
    if (!phaseState.items[itemKey].todos) {
      phaseState.items[itemKey].todos = [];
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

    // Add todos button and list
    const addTodoBtn = createElement('button', {
      className: 'btn btn-small btn-secondary',
      style: 'margin-top: 0.5rem;',
      onClick: () => openTodoModal(phaseDefinition.id, itemKey)
    }, ['+ Todo追加']);

    const todosContainer = createElement('div', { 
      className: 'item-todos-container',
      style: 'margin-top: 0.75rem;'
    }, []);
    renderItemTodos(todosContainer, phaseDefinition.id, itemKey);

    const li = createElement('li', {}, [
      createElement('div', { className: 'checklist-header' }, [checkbox, label]),
      textarea,
      addTodoBtn,
      todosContainer
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
  
  // Task status change
  document.getElementById('task-status-select').addEventListener('change', async (e) => {
    currentTask.status = e.target.value;
    await saveTask();
    renderTaskDetail();
  });
  
  // Todo form submit
  document.getElementById('todo-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!currentTodoPhaseId || !currentTodoItemKey) return;
    
    const todoIdx = e.target.elements.todoIdx.value;
    const description = e.target.elements.description.value;
    const startDate = e.target.elements.startDate.value;
    const status = e.target.elements.status.value;
    
    const phaseState = currentTask.phases[currentTodoPhaseId];
    if (!phaseState || !phaseState.items[currentTodoItemKey]) return;
    
    const todoData = { description, startDate, status };
    
    if (todoIdx !== '') {
      // Edit existing todo
      phaseState.items[currentTodoItemKey].todos[parseInt(todoIdx)] = todoData;
    } else {
      // Create new todo
      if (!phaseState.items[currentTodoItemKey].todos) {
        phaseState.items[currentTodoItemKey].todos = [];
      }
      phaseState.items[currentTodoItemKey].todos.push(todoData);
    }
    
    await saveTask();
    renderTaskFramework();
    hideModal('todo-modal');
    e.target.reset();
  });
  
  document.getElementById('cancel-todo').addEventListener('click', () => {
    hideModal('todo-modal');
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

let currentTodoPhaseId = null;
let currentTodoItemKey = null;

function renderItemTodos(container, phaseId, itemKey) {
  clearElement(container);
  
  const phaseState = currentTask.phases[phaseId];
  if (!phaseState || !phaseState.items[itemKey]) return;
  
  const todos = phaseState.items[itemKey].todos || [];
  
  if (todos.length === 0) {
    return;
  }
  
  const todoList = createElement('ul', { className: 'todo-list', style: 'margin-top: 0.5rem;' }, []);
  
  todos.forEach((todo, todoIdx) => {
    const statusBadge = createElement('span', {
      className: `status-badge status-${todo.status || 'Planned'}`,
      style: 'font-size: 0.75rem; padding: 0.125rem 0.5rem;'
    }, [todo.status || 'Planned']);
    
    const descEl = createElement('div', { 
      style: 'font-size: 0.875rem; color: var(--text);'
    }, [todo.description || '']);
    
    const dateEl = todo.startDate ? createElement('div', {
      style: 'font-size: 0.875rem; color: #64748b; margin-top: 0.25rem;'
    }, [`着手日: ${formatDate(todo.startDate)}`]) : null;
    
    const editBtn = createElement('button', {
      className: 'btn btn-small btn-secondary',
      onClick: () => {
        currentTodoPhaseId = phaseId;
        currentTodoItemKey = itemKey;
        document.getElementById('todo-modal-title').textContent = 'Todoを編集';
        document.getElementById('todo-form').elements.todoIdx.value = todoIdx;
        document.getElementById('todo-form').elements.description.value = todo.description || '';
        document.getElementById('todo-form').elements.startDate.value = todo.startDate || '';
        document.getElementById('todo-form').elements.status.value = todo.status || 'Planned';
        showModal('todo-modal');
      }
    }, ['編集']);
    
    const deleteBtn = createElement('button', {
      className: 'btn btn-small btn-danger',
      onClick: async () => {
        if (!confirm('このTodoを削除しますか？')) return;
        phaseState.items[itemKey].todos.splice(todoIdx, 1);
        await saveTask();
        renderTaskFramework();
      }
    }, ['削除']);
    
    const contentDiv = createElement('div', { style: 'flex: 1;' }, 
      [descEl, dateEl].filter(Boolean)
    );
    const actionsDiv = createElement('div', { style: 'display: flex; gap: 0.5rem; align-items: flex-start;' }, 
      [statusBadge, editBtn, deleteBtn]
    );
    
    const li = createElement('li', { 
      className: 'todo-item',
      style: 'display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.75rem; background: var(--card); border: 1px solid var(--border); border-radius: 0.375rem; margin-bottom: 0.5rem;'
    }, [contentDiv, actionsDiv]);
    
    todoList.appendChild(li);
  });
  
  container.appendChild(todoList);
}

function openTodoModal(phaseId, itemKey) {
  currentTodoPhaseId = phaseId;
  currentTodoItemKey = itemKey;
  document.getElementById('todo-modal-title').textContent = 'Todoを追加';
  document.getElementById('todo-form').elements.todoIdx.value = '';
  document.getElementById('todo-form').elements.description.value = '';
  document.getElementById('todo-form').elements.startDate.value = '';
  document.getElementById('todo-form').elements.status.value = 'Planned';
  showModal('todo-modal');
}

window.addEventListener('DOMContentLoaded', init);
