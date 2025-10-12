/**
 * Lazy Consultant - Dashboard Module
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

import { fetchJSON } from './api.js';
import { createElement, clearElement, formatDate } from './dom.js';
import { setupExportButton } from './export.js';

let projects = [];
let works = [];
let tasks = [];

async function init() {
  try {
    [projects, works, tasks] = await Promise.all([
      fetchJSON('/api/projects'),
      fetchJSON('/api/works'),
      fetchJSON('/api/tasks')
    ]);
    
    renderDashboard();
    setupExportButton();
  } catch (err) {
    console.error('Failed to load data:', err);
  }
}

function renderDashboard() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const categorized = {
    planned: [],
    onSchedule: [],
    delayed: [],
    ahead: []
  };
  
  tasks.forEach(task => {
    const startDate = new Date(task.startDate);
    const endDate = new Date(task.endDate);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    
    // Get work and project info
    const work = works.find(w => w.id === task.workId);
    const project = work ? projects.find(p => p.id === work.projectId) : null;
    
    const taskWithContext = {
      ...task,
      workName: work?.name || '不明なワーク',
      projectName: project?.name || '不明なプロジェクト'
    };
    
    // Calculate progress percentage based on phases
    let completedPhases = 0;
    let totalPhases = 0;
    if (task.phases) {
      const phaseEntries = Object.values(task.phases);
      totalPhases = phaseEntries.length;
      completedPhases = phaseEntries.filter(p => p.completed).length;
    }
    const progressPercent = totalPhases > 0 ? (completedPhases / totalPhases) * 100 : 0;
    
    // Calculate expected progress based on dates
    const totalDuration = endDate - startDate;
    const elapsed = today - startDate;
    const expectedPercent = totalDuration > 0 ? Math.max(0, Math.min(100, (elapsed / totalDuration) * 100)) : 0;
    
    taskWithContext.progressPercent = progressPercent;
    taskWithContext.expectedPercent = expectedPercent;
    taskWithContext.completedPhases = completedPhases;
    taskWithContext.totalPhases = totalPhases;
    
    // Categorize
    if (today < startDate) {
      // Not started yet
      categorized.planned.push(taskWithContext);
    } else if (today > endDate) {
      // Past due - if not 100% complete, it's delayed
      if (progressPercent < 100) {
        categorized.delayed.push(taskWithContext);
      }
    } else {
      // In progress
      if (progressPercent > expectedPercent + 10) {
        // Ahead by more than 10%
        categorized.ahead.push(taskWithContext);
      } else if (progressPercent < expectedPercent - 10) {
        // Behind by more than 10%
        categorized.delayed.push(taskWithContext);
      } else {
        // On schedule
        categorized.onSchedule.push(taskWithContext);
      }
    }
  });
  
  renderTaskList('planned-tasks', categorized.planned);
  renderTaskList('on-schedule-tasks', categorized.onSchedule);
  renderTaskList('delayed-tasks', categorized.delayed);
  renderTaskList('ahead-tasks', categorized.ahead);
}

function renderTaskList(containerId, taskList) {
  const container = document.getElementById(containerId);
  clearElement(container);
  
  if (taskList.length === 0) {
    container.appendChild(createElement('p', { 
      style: 'color: #64748b; padding: 1rem;' 
    }, ['該当するタスクはありません。']));
    return;
  }
  
  taskList.forEach(task => {
    const card = createElement('div', { 
      className: 'dashboard-task-card',
      onClick: () => {
        window.location.href = `/task.html?id=${task.id}`;
      }
    }, []);
    
    const header = createElement('div', { className: 'dashboard-task-header' }, [
      createElement('h4', {}, [task.name]),
      createElement('span', { 
        className: `status-badge status-${task.status}` 
      }, [task.status])
    ]);
    
    const hierarchy = createElement('div', { 
      className: 'dashboard-task-hierarchy',
      style: 'font-size: 0.875rem; color: #64748b; margin: 0.5rem 0;'
    }, [
      `${task.projectName} > ${task.workName}`
    ]);
    
    const dates = createElement('div', { 
      style: 'font-size: 0.875rem; color: #64748b; margin: 0.5rem 0;'
    }, [
      `${formatDate(task.startDate)} ~ ${formatDate(task.endDate)}`
    ]);
    
    const progressBar = createElement('div', { 
      className: 'progress-bar-container',
      style: 'background: #e2e8f0; border-radius: 0.25rem; height: 1.5rem; position: relative; overflow: hidden;'
    }, []);
    
    const actualBar = createElement('div', {
      style: `background: #2563eb; height: 100%; width: ${task.progressPercent}%; transition: width 0.3s;`
    }, []);
    
    const progressLabel = createElement('div', {
      style: 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; color: #1e293b;'
    }, [
      `進捗: ${task.completedPhases}/${task.totalPhases} フェーズ (${Math.round(task.progressPercent)}%)`
    ]);
    
    progressBar.appendChild(actualBar);
    progressBar.appendChild(progressLabel);
    
    // Show todos count if any
    const todosCount = task.todos ? task.todos.length : 0;
    const completedTodosCount = task.todos ? task.todos.filter(t => t.completed).length : 0;
    
    let todosInfo = null;
    if (todosCount > 0) {
      todosInfo = createElement('div', {
        style: 'font-size: 0.875rem; color: #64748b; margin-top: 0.5rem;'
      }, [
        `📝 Todos: ${completedTodosCount}/${todosCount} 完了`
      ]);
    }
    
    card.appendChild(header);
    card.appendChild(hierarchy);
    card.appendChild(dates);
    card.appendChild(progressBar);
    if (todosInfo) card.appendChild(todosInfo);
    
    container.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', init);
