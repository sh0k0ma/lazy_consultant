/**
 * Lazy Consultant - Task Detail Module (with Optional Framework)
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
import { UNIVERSAL_FRAMEWORK, getPhaseOrder, initializeTaskPhases } from './task-frameworks.js';

let currentTask = null;
let currentPhase = null;

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
    
    // 既存タスクとの互換性確保
    if (currentTask.useFramework === undefined) {
      currentTask.useFramework = false;
    }
    
    // フレームワーク有効時、phases未定義なら初期化
    if (currentTask.useFramework && !currentTask.phases) {
      currentTask.phases = initializeTaskPhases();
      await saveTask();
    }
    
    renderTaskDetail();
    setupEventListeners();
    setupFrameworkToggle();
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

  // フレームワークチェックボックスの状態を反映
  const frameworkCheckbox = document.getElementById('enable-framework-checkbox');
  const frameworkContainer = document.getElementById('framework-container');
  
  if (frameworkCheckbox && frameworkContainer) {
    frameworkCheckbox.checked = currentTask.useFramework === true;
    frameworkContainer.style.display = currentTask.useFramework ? 'block' : 'none';
    
    if (currentTask.useFramework) {
      renderFramework();
    }
  }
  
  renderJournals();
}

function renderFramework() {
  if (!currentTask.phases) {
    return;
  }
  
  const phaseOrder = getPhaseOrder();
  
  // 現在のフェーズを決定（最初の未完了フェーズ）
  if (!currentPhase) {
    currentPhase = phaseOrder.find(p => !currentTask.phases[p].completed) || phaseOrder[0];
  }
  
  renderPhaseTabs();
  renderPhaseContent();
}

function renderPhaseTabs() {
  const tabsContainer = document.getElementById('phase-tabs');
  if (!tabsContainer) return;
  
  clearElement(tabsContainer);
  
  const phaseOrder = getPhaseOrder();
  
  phaseOrder.forEach(phaseKey => {
    const phase = currentTask.phases[phaseKey];
    const tab = createElement('button', { 
      className: `phase-tab ${currentPhase === phaseKey ? 'active' : ''} ${phase.completed ? 'completed' : ''}`,
      'data-phase': phaseKey
    }, [phase.label]);
    
    tab.addEventListener('click', () => {
      currentPhase = phaseKey;
      renderFramework();
    });
    
    tabsContainer.appendChild(tab);
  });
}

function renderPhaseContent() {
  const contentContainer = document.getElementById('phase-content');
  if (!contentContainer) return;
  
  // 表示を有効化
  contentContainer.style.display = 'block';
  
  clearElement(contentContainer);
  
  const phase = currentTask.phases[currentPhase];
  
  // フェーズヘッダー
  const header = createElement('div', { className: 'phase-header' }, [
    createElement('h4', {}, [phase.label]),
    createElement('p', { style: 'color: #64748b; font-size: 0.9rem;' }, [
      `${phase.checklist.filter(item => item.checked).length} / ${phase.checklist.length} 完了`
    ])
  ]);
  contentContainer.appendChild(header);
  
  // チェックリスト
  const checklist = createElement('div', { className: 'checklist' });
  
  phase.checklist.forEach((item, index) => {
    const itemDiv = createElement('div', { className: 'checklist-item' }, [
      createElement('label', { style: 'display: flex; align-items: start; gap: 0.5rem; cursor: pointer;' }, [
        createElement('input', {
          type: 'checkbox',
          checked: item.checked,
          'data-index': index,
          style: 'margin-top: 0.25rem; cursor: pointer;'
        }),
        createElement('span', {}, [item.text])
      ]),
      createElement('textarea', {
        placeholder: 'ノート（任意）',
        value: item.note || '',
        'data-index': index,
        rows: '2',
        style: 'margin-left: 1.5rem; margin-top: 0.5rem; width: calc(100% - 1.5rem); font-size: 0.85rem;'
      })
    ]);
    
    // チェックボックスイベント
    const checkbox = itemDiv.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', async (e) => {
      const idx = parseInt(e.target.dataset.index);
      phase.checklist[idx].checked = e.target.checked;
      await saveTask();
      renderPhaseContent();
    });
    
    // ノートイベント
    const textarea = itemDiv.querySelector('textarea');
    textarea.addEventListener('blur', async (e) => {
      const idx = parseInt(e.target.dataset.index);
      phase.checklist[idx].note = e.target.value;
      await saveTask();
    });
    
    checklist.appendChild(itemDiv);
  });
  
  contentContainer.appendChild(checklist);
  
  // 完了ボタン
  if (!phase.completed) {
    const completeBtn = createElement('button', {
      className: 'btn btn-primary',
      style: 'margin-top: 1.5rem;'
    }, ['Complete Phase']);
    
    completeBtn.addEventListener('click', async () => {
      if (confirm(`${phase.label}フェーズを完了しますか？`)) {
        phase.completed = true;
        await saveTask();
        
        // 次のフェーズへ移動
        const phaseOrder = getPhaseOrder();
        const currentIndex = phaseOrder.indexOf(currentPhase);
        if (currentIndex < phaseOrder.length - 1) {
          currentPhase = phaseOrder[currentIndex + 1];
        }
        
        renderFramework();
      }
    });
    
    contentContainer.appendChild(completeBtn);
  } else {
    const completedMsg = createElement('p', {
      style: 'margin-top: 1.5rem; color: #10b981; font-weight: 500;'
    }, ['✓ このフェーズは完了しています']);
    contentContainer.appendChild(completedMsg);
  }
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

function setupFrameworkToggle() {
  const checkbox = document.getElementById('enable-framework-checkbox');
  if (!checkbox) return;
  
  checkbox.addEventListener('change', async (e) => {
    currentTask.useFramework = e.target.checked;
    
    // フレームワークを有効にする場合、phases未定義なら初期化
    if (currentTask.useFramework && !currentTask.phases) {
      currentTask.phases = initializeTaskPhases();
      currentPhase = getPhaseOrder()[0];
    }
    
    await saveTask();
    renderTaskDetail();
  });
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
