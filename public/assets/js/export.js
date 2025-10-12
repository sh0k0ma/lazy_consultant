import { fetchJSON } from './api.js';

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

export async function exportAllData() {
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

// Setup export button for any page
export function setupExportButton() {
  const exportBtn = document.getElementById('export-data-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportAllData);
  }
}
