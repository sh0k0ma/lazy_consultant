/**
 * Lazy Consultant - Knowledge Base Module
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

import { fetchJSON, postJSON, putJSON, deleteJSON } from './api.js';
import { createElement, clearElement, showModal, hideModal, formToObject, objectToForm } from './dom.js';
import { setupExportButton } from './export.js';

let knowledge = [];
let filteredItems = [];

async function init() {
  try {
    knowledgeItems = await fetchJSON('/api/knowledge');
    filteredItems = [...knowledgeItems];
    renderKnowledgeTable();
    setupEventListeners();
    setupExportButton();
  } catch (err) {
    console.error('Failed to load knowledge:', err);
  }
}

function renderKnowledgeTable() {
  const tbody = document.getElementById('knowledge-tbody');
  clearElement(tbody);
  
  if (filteredItems.length === 0) {
    const row = createElement('tr', {}, [
      createElement('td', { colspan: '5', style: 'text-align: center; color: #64748b; padding: 2rem;' }, [
        'ナレッジが見つかりませんでした。'
      ])
    ]);
    tbody.appendChild(row);
    return;
  }
  
  filteredItems.forEach(item => {
    const tags = item.tags ? item.tags.split(',').map(t => t.trim()) : [];
    
    const row = createElement('tr', {}, [
      createElement('td', {}, [item.project || '-']),
      createElement('td', {}, [item.category || '-']),
      createElement('td', { 
        style: 'cursor: pointer; color: var(--primary);',
        onClick: () => viewKnowledge(item)
      }, [item.title]),
      createElement('td', {}, tags.map(tag => 
        createElement('span', { className: 'tag' }, [tag])
      )),
      createElement('td', {}, [
        createElement('button', {
          className: 'btn btn-small btn-secondary',
          onClick: () => editKnowledge(item.id),
          style: 'margin-right: 0.25rem;'
        }, ['編集']),
        createElement('button', {
          className: 'btn btn-small btn-danger',
          onClick: () => deleteKnowledge(item.id)
        }, ['削除'])
      ])
    ]);
    
    tbody.appendChild(row);
  });
}

function viewKnowledge(item) {
  document.getElementById('knowledge-detail-title').textContent = item.title;
  document.getElementById('knowledge-detail-project').textContent = item.project || '-';
  document.getElementById('knowledge-detail-category').textContent = item.category || '-';
  
  const tags = item.tags ? item.tags.split(',').map(t => t.trim()) : [];
  const tagsContainer = document.getElementById('knowledge-detail-tags');
  clearElement(tagsContainer);
  if (tags.length > 0) {
    tags.forEach(tag => {
      tagsContainer.appendChild(createElement('span', { className: 'tag' }, [tag]));
    });
  } else {
    tagsContainer.textContent = '-';
  }
  
  document.getElementById('knowledge-detail-details').textContent = item.details || '-';
  
  showModal('knowledge-detail-modal');
}

function editKnowledge(id) {
  const item = knowledgeItems.find(k => k.id === id);
  if (!item) return;
  
  const form = document.getElementById('knowledge-form');
  document.getElementById('knowledge-modal-title').textContent = 'ナレッジを編集';
  objectToForm(form, item);
  showModal('knowledge-modal');
}

async function deleteKnowledge(id) {
  if (!confirm('このナレッジを削除しますか?')) {
    return;
  }
  
  try {
    await deleteJSON(`/api/knowledge/${id}`);
    knowledgeItems = knowledgeItems.filter(k => k.id !== id);
    applyFilters();
  } catch (err) {
    alert('ナレッジの削除に失敗しました: ' + err.message);
  }
}

function applyFilters() {
  const projectFilter = document.getElementById('filter-project').value.toLowerCase();
  const categoryFilter = document.getElementById('filter-category').value.toLowerCase();
  const tagsFilter = document.getElementById('filter-tags').value.toLowerCase();
  
  filteredItems = knowledgeItems.filter(item => {
    const matchProject = !projectFilter || (item.project && item.project.toLowerCase().includes(projectFilter));
    const matchCategory = !categoryFilter || (item.category && item.category.toLowerCase().includes(categoryFilter));
    const matchTags = !tagsFilter || (item.tags && item.tags.toLowerCase().includes(tagsFilter));
    
    return matchProject && matchCategory && matchTags;
  });
  
  renderKnowledgeTable();
}

function setupEventListeners() {
  document.getElementById('add-knowledge-btn').addEventListener('click', () => {
    const form = document.getElementById('knowledge-form');
    form.reset();
    document.getElementById('knowledge-modal-title').textContent = 'Add Knowledge';
    showModal('knowledge-modal');
  });
  
  document.getElementById('knowledge-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = formToObject(e.target);
    
    try {
      if (formData.id) {
        const updated = await putJSON(`/api/knowledge/${formData.id}`, formData);
        const idx = knowledgeItems.findIndex(k => k.id === formData.id);
        if (idx !== -1) knowledgeItems[idx] = updated;
      } else {
        const newItem = await postJSON('/api/knowledge', formData);
        knowledgeItems.push(newItem);
      }
      
      hideModal('knowledge-modal');
      applyFilters();
    } catch (err) {
      alert('ナレッジの保存に失敗しました: ' + err.message);
    }
  });
  
  document.getElementById('cancel-knowledge').addEventListener('click', () => {
    hideModal('knowledge-modal');
  });
  
  document.getElementById('close-detail-btn').addEventListener('click', () => {
    hideModal('knowledge-detail-modal');
  });
  
  // Filter inputs
  document.getElementById('filter-project').addEventListener('input', applyFilters);
  document.getElementById('filter-category').addEventListener('input', applyFilters);
  document.getElementById('filter-tags').addEventListener('input', applyFilters);
  
  document.getElementById('clear-filters-btn').addEventListener('click', () => {
    document.getElementById('filter-project').value = '';
    document.getElementById('filter-category').value = '';
    document.getElementById('filter-tags').value = '';
    applyFilters();
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
