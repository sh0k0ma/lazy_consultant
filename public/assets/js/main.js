import { fetchJSON, postJSON, putJSON, deleteJSON } from './api.js';
import { createElement, clearElement, showModal, hideModal, formatDate, formToObject, objectToForm } from './dom.js';

let projects = [];
let works = [];
let tasks = [];

// Initialize
async function init() {
  try {
    [projects, works, tasks] = await Promise.all([
      fetchJSON('/api/projects'),
      fetchJSON('/api/works'),
      fetchJSON('/api/tasks')
    ]);
    
    renderDashboard();
    setupEventListeners();
  } catch (err) {
    console.error('Failed to load data:', err);
  }
}

// Render Dashboard
function renderDashboard() {
  const container = document.getElementById('projects-container');
  clearElement(container);
  
  if (projects.length === 0) {
    container.appendChild(createElement('div', { className: 'empty-state' }, [
      'まだプロジェクトがありません。「+ プロジェクトを追加」をクリックして開始してください。'
    ]));
    return;
  }
  
  projects.forEach(project => {
    const projectWorks = works.filter(w => w.projectId === project.id);
    const projectCard = createProjectCard(project, projectWorks);
    container.appendChild(projectCard);
  });
}

function createProjectCard(project, projectWorks) {
  const isExpanded = project.expanded || false;
  
  const card = createElement('div', { className: 'project-card' }, []);
  
  const header = createElement('div', { className: 'project-header' }, []);
  
  const titleDiv = createElement('div', { 
    className: 'project-title',
    onClick: () => toggleProject(project.id)
  }, [
    createElement('span', { className: `toggle-icon ${isExpanded ? 'expanded' : ''}` }, ['▶']),
    createElement('h3', {}, [project.name]),
    createElement('span', { className: `status-badge status-${project.status}` }, [project.status])
  ]);
  
  const actions = createElement('div', { className: 'project-actions' }, [
    createElement('button', { 
      className: 'btn btn-small btn-secondary',
      onClick: (e) => {
        e.stopPropagation();
        window.location.href = `/project.html?id=${project.id}`;
      }
    }, ['詳細']),
    createElement('button', { 
      className: 'btn btn-small btn-primary',
      onClick: (e) => {
        e.stopPropagation();
        openWorkModal(project.id);
      }
    }, ['+ ワーク']),
    createElement('button', { 
      className: 'btn btn-small btn-secondary',
      onClick: (e) => {
        e.stopPropagation();
        editProject(project.id);
      }
    }, ['編集']),
    createElement('button', { 
      className: 'btn btn-small btn-danger',
      onClick: (e) => {
        e.stopPropagation();
        deleteProject(project.id);
      }
    }, ['削除'])
  ]);
  
  header.appendChild(titleDiv);
  header.appendChild(actions);
  card.appendChild(header);
  
  const content = createElement('div', { 
    className: `project-content ${isExpanded ? 'show' : ''}` 
  }, []);
  
  if (projectWorks.length > 0) {
    const worksList = createElement('div', { className: 'works-list' }, []);
    projectWorks.forEach(work => {
      const workTasks = tasks.filter(t => t.workId === work.id);
      worksList.appendChild(createWorkCard(work, workTasks));
    });
    content.appendChild(worksList);
  } else {
    content.appendChild(createElement('p', { style: 'color: #64748b; margin-left: 1.5rem;' }, [
      'まだワークがありません。「+ ワーク」をクリックして追加してください。'
    ]));
  }
  
  card.appendChild(content);
  return card;
}

function createWorkCard(work, workTasks) {
  const isExpanded = work.expanded || false;
  
  const card = createElement('div', { className: 'work-card' }, []);
  
  const header = createElement('div', { className: 'work-header' }, []);
  
  const titleDiv = createElement('div', { 
    className: 'work-title',
    onClick: () => toggleWork(work.id)
  }, [
    createElement('span', { className: `toggle-icon ${isExpanded ? 'expanded' : ''}` }, ['▶']),
    createElement('h4', {}, [work.name]),
    createElement('span', { className: `status-badge status-${work.status}` }, [work.status])
  ]);
  
  const actions = createElement('div', { className: 'project-actions' }, [
    createElement('button', { 
      className: 'btn btn-small btn-secondary',
      onClick: (e) => {
        e.stopPropagation();
        window.location.href = `/work.html?id=${work.id}`;
      }
    }, ['詳細']),
    createElement('button', { 
      className: 'btn btn-small btn-primary',
      onClick: (e) => {
        e.stopPropagation();
        openTaskModal(work.id);
      }
    }, ['+ タスク']),
    createElement('button', { 
      className: 'btn btn-small btn-secondary',
      onClick: (e) => {
        e.stopPropagation();
        editWork(work.id);
      }
    }, ['編集']),
    createElement('button', { 
      className: 'btn btn-small btn-danger',
      onClick: (e) => {
        e.stopPropagation();
        deleteWork(work.id);
      }
    }, ['削除'])
  ]);
  
  header.appendChild(titleDiv);
  header.appendChild(actions);
  card.appendChild(header);
  
  const content = createElement('div', { 
    className: `work-content ${isExpanded ? 'show' : ''}` 
  }, []);
  
  if (workTasks.length > 0) {
    const tasksList = createElement('div', { className: 'tasks-list' }, []);
    workTasks.forEach(task => {
      tasksList.appendChild(createTaskCard(task));
    });
    content.appendChild(tasksList);
  } else {
    content.appendChild(createElement('p', { style: 'color: #64748b; margin-left: 1.5rem;' }, [
      'まだタスクがありません。「+ タスク」をクリックして追加してください。'
    ]));
  }
  
  card.appendChild(content);
  return card;
}

function createTaskCard(task) {
  return createElement('div', { 
    className: 'task-card',
    onClick: () => {
      window.location.href = `/task.html?id=${task.id}`;
    }
  }, [
    createElement('div', { className: 'task-info' }, [
      createElement('h5', {}, [task.name]),
      createElement('div', { className: 'task-meta' }, [
        `${task.taskType} • ${formatDate(task.startDate)} - ${formatDate(task.endDate)}`
      ])
    ]),
    createElement('span', { className: `status-badge status-${task.status}` }, [task.status])
  ]);
}

// Toggle functions
function toggleProject(id) {
  const project = projects.find(p => p.id === id);
  if (project) {
    project.expanded = !project.expanded;
    renderDashboard();
  }
}

function toggleWork(id) {
  const work = works.find(w => w.id === id);
  if (work) {
    work.expanded = !work.expanded;
    renderDashboard();
  }
}

// Modal functions
function openProjectModal(projectId = null) {
  const modal = document.getElementById('project-modal');
  const form = document.getElementById('project-form');
  const title = document.getElementById('project-modal-title');
  
  form.reset();
  
  if (projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      title.textContent = 'プロジェクトを編集';
      objectToForm(form, project);
    }
  } else {
    title.textContent = 'プロジェクトを追加';
    form.elements.id.value = '';
  }
  
  showModal('project-modal');
}

function openWorkModal(projectId, workId = null) {
  const modal = document.getElementById('work-modal');
  const form = document.getElementById('work-form');
  const title = document.getElementById('work-modal-title');
  
  form.reset();
  form.elements.projectId.value = projectId;
  
  if (workId) {
    const work = works.find(w => w.id === workId);
    if (work) {
      title.textContent = 'ワークを編集';
      objectToForm(form, work);
    }
  } else {
    title.textContent = 'ワークを追加';
    form.elements.id.value = '';
  }
  
  showModal('work-modal');
}

function openTaskModal(workId, taskId = null) {
  const modal = document.getElementById('task-modal');
  const form = document.getElementById('task-form');
  const title = document.getElementById('task-modal-title');
  
  form.reset();
  form.elements.workId.value = workId;
  
  if (taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      title.textContent = 'タスクを編集';
      objectToForm(form, task);
    }
  } else {
    title.textContent = 'タスクを追加';
    form.elements.id.value = '';
  }
  
  showModal('task-modal');
}

function editProject(id) {
  openProjectModal(id);
}

function editWork(id) {
  const work = works.find(w => w.id === id);
  if (work) {
    openWorkModal(work.projectId, id);
  }
}

// CRUD operations
async function deleteProject(id) {
  if (!confirm('このプロジェクトを削除しますか?関連するすべてのワークとタスクも削除されます。')) {
    return;
  }
  
  try {
    await deleteJSON(`/api/projects/${id}`);
    
    // Delete associated works and tasks
    const projectWorks = works.filter(w => w.projectId === id);
    for (const work of projectWorks) {
      await deleteJSON(`/api/works/${work.id}`);
      const workTasks = tasks.filter(t => t.workId === work.id);
      for (const task of workTasks) {
        await deleteJSON(`/api/tasks/${task.id}`);
      }
    }
    
    projects = projects.filter(p => p.id !== id);
    works = works.filter(w => w.projectId !== id);
    tasks = tasks.filter(t => !projectWorks.some(w => w.id === t.workId));
    
    renderDashboard();
  } catch (err) {
    alert('プロジェクトの削除に失敗しました: ' + err.message);
  }
}

async function deleteWork(id) {
  if (!confirm('このワークを削除しますか?関連するすべてのタスクも削除されます。')) {
    return;
  }
  
  try {
    await deleteJSON(`/api/works/${id}`);
    
    // Delete associated tasks
    const workTasks = tasks.filter(t => t.workId === id);
    for (const task of workTasks) {
      await deleteJSON(`/api/tasks/${task.id}`);
    }
    
    works = works.filter(w => w.id !== id);
    tasks = tasks.filter(t => t.workId !== id);
    
    renderDashboard();
  } catch (err) {
    alert('ワークの削除に失敗しました: ' + err.message);
  }
}

// Export all data function
function downloadJSON(data, filename) {
  const dataStr = JSON.stringify(data, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

async function exportAllData() {
  try {
    // Fetch fresh data from server
    const [freshProjects, freshWorks, freshTasks, freshKnowledge] = await Promise.all([
      fetchJSON('/api/projects'),
      fetchJSON('/api/works'),
      fetchJSON('/api/tasks'),
      fetchJSON('/api/knowledge')
    ]);
    
    // Download each file separately
    downloadJSON(freshProjects, 'projects.json');
    
    // Add small delays between downloads to ensure all files are downloaded
    await new Promise(resolve => setTimeout(resolve, 100));
    downloadJSON(freshWorks, 'works.json');
    
    await new Promise(resolve => setTimeout(resolve, 100));
    downloadJSON(freshTasks, 'tasks.json');
    
    await new Promise(resolve => setTimeout(resolve, 100));
    downloadJSON(freshKnowledge, 'knowledge.json');
    
    alert('データを出力しました（4つのJSONファイル）');
  } catch (err) {
    alert('データの出力に失敗しました: ' + err.message);
  }
}

// Event listeners
function setupEventListeners() {
  // Export data button
  const exportBtn = document.getElementById('export-data-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportAllData);
  }
  
  // Add project button
  document.getElementById('add-project-btn').addEventListener('click', () => {
    openProjectModal();
  });
  
  // Project form
  document.getElementById('project-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = formToObject(e.target);
    
    try {
      if (formData.id) {
        const updated = await putJSON(`/api/projects/${formData.id}`, formData);
        const idx = projects.findIndex(p => p.id === formData.id);
        if (idx !== -1) projects[idx] = updated;
      } else {
        const newProject = await postJSON('/api/projects', formData);
        projects.push(newProject);
      }
      
      hideModal('project-modal');
      renderDashboard();
    } catch (err) {
      alert('Failed to save project: ' + err.message);
    }
  });
  
  // Work form
  document.getElementById('work-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = formToObject(e.target);
    
    // Initialize journals array if journalEntry provided
    if (formData.journalEntry && !formData.id) {
      formData.journals = [{
        date: new Date().toISOString(),
        entry: formData.journalEntry
      }];
    }
    delete formData.journalEntry;
    
    try {
      if (formData.id) {
        const updated = await putJSON(`/api/works/${formData.id}`, formData);
        const idx = works.findIndex(w => w.id === formData.id);
        if (idx !== -1) works[idx] = updated;
      } else {
        const newWork = await postJSON('/api/works', formData);
        works.push(newWork);
      }
      
      hideModal('work-modal');
      renderDashboard();
    } catch (err) {
      alert('Failed to save work: ' + err.message);
    }
  });
  
  // Task form
  document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = formToObject(e.target);
    
    // Initialize journals array if journalEntry provided
    if (formData.journalEntry && !formData.id) {
      formData.journals = [{
        date: new Date().toISOString(),
        entry: formData.journalEntry
      }];
    }
    delete formData.journalEntry;
    
    // Initialize phases object based on task type
    if (!formData.id && formData.taskType) {
      formData.phases = {
        input: { completed: false, items: {} },
        progress: { completed: false, items: {} },
        output: { completed: false, items: {} }
      };
    }
    
    try {
      if (formData.id) {
        const updated = await putJSON(`/api/tasks/${formData.id}`, formData);
        const idx = tasks.findIndex(t => t.id === formData.id);
        if (idx !== -1) tasks[idx] = updated;
      } else {
        const newTask = await postJSON('/api/tasks', formData);
        tasks.push(newTask);
      }
      
      hideModal('task-modal');
      renderDashboard();
    } catch (err) {
      alert('Failed to save task: ' + err.message);
    }
  });
  
  // Cancel buttons
  document.getElementById('cancel-project').addEventListener('click', () => {
    hideModal('project-modal');
  });
  
  document.getElementById('cancel-work').addEventListener('click', () => {
    hideModal('work-modal');
  });
  
  document.getElementById('cancel-task').addEventListener('click', () => {
    hideModal('task-modal');
  });
  
  // Close modals on X click
  document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) modal.classList.remove('show');
    });
  });
  
  // Close modal on outside click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
}

// Start app
window.addEventListener('DOMContentLoaded', init);
