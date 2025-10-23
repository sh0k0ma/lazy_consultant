/**
 * Lazy Consultant - Task Detail Module (Simplified)
 * 
 * Copyright (C) 2025 Shohei Komatsu (sh0k0ma)
 * Licensed under GNU General Public License v3.0
 * 
 * This file is part of Lazy Consultant.
 * See LICENCE.txt for license information.
 * 
 * NOTICE: Commercial use requires explicit permission.
 * Contact: https://shokoma.com/contact
 */

import { fetchJSON, putJSON } from './api.js';
import { createElement, clearElement, formatDate, showModal, hideModal } from './dom.js';
import { setupExportButton } from './export.js';

let currentTask = null;

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
    setupExportButton();
  } catch (err) {
    console.error('Failed to load task:', err);
    alert('タスクの読み込みに失敗しました');
  }
}

function renderTaskDetail() {
  document.getElementById('task-name').textContent = currentTask.name;
  
  const statusSelect = document.getElementById('task-status-select');
  statusSelect.value = currentTask.status;
  
  document.getElementById('task-purpose').textContent = currentTask.purpose || '-';
  document.getElementById('task-stakeholders').textContent = currentTask.stakeholders || '-';
  document.getElementById('task-start').textContent = formatDate(currentTask.startDate);
  document.getElementById('task-end').textContent = formatDate(currentTask.endDate);

  renderJournals();
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
  
  const sortedJournals = [...currentTask.journals].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  sortedJournals.forEach(journal => {
    const entry = createElement('div', { className: 'journal-entry' }, [
      createElement('div', { className: 'journal-date' }, [formatDate(journal.date)]),
      createElement('div', { className: 'journal-text' }, [journal.entry])
    ]);
    container.appendChild(entry);
  });
}

async function saveTask() {
  try {
    await putJSON(`/api/tasks/${currentTask.id}`, currentTask);
  } catch (err) {
    console.error('Failed to save task:', err);
    alert('保存に失敗しました');
  }
}

function setupEventListeners() {
  document.getElementById('back-btn').addEventListener('click', () => {
    window.history.back();
  });
  
  document.getElementById('delete-task-btn').addEventListener('click', async () => {
    if (!confirm('このタスクを削除しますか？')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/tasks/${currentTask.id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('タスクの削除に失敗しました');
      }
      
      alert('タスクを削除しました');
      window.location.href = '/tasks.html';
    } catch (err) {
      alert('タスクの削除に失敗しました: ' + err.message);
    }
  });
  
  document.getElementById('edit-task-btn').addEventListener('click', () => {
    const form = document.getElementById('edit-task-form');
    form.elements.id.value = currentTask.id;
    form.elements.purpose.value = currentTask.purpose || '';
    form.elements.stakeholders.value = currentTask.stakeholders || '';
    form.elements.startDate.value = currentTask.startDate;
    form.elements.endDate.value = currentTask.endDate;
    showModal('edit-task-modal');
  });
  
  document.getElementById('edit-task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    currentTask.purpose = e.target.elements.purpose.value;
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
  
  document.getElementById('task-status-select').addEventListener('change', async (e) => {
    currentTask.status = e.target.value;
    await saveTask();
  });
  
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
