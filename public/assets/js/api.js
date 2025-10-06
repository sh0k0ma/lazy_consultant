// API utility functions
const API_BASE = '';

export async function fetchJSON(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export async function postJSON(endpoint, data) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(`Failed to post to ${endpoint}`);
  return res.json();
}

export async function putJSON(endpoint, data) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(`Failed to update ${endpoint}`);
  return res.json();
}

export async function deleteJSON(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error(`Failed to delete ${endpoint}`);
  return res.json();
}

// Data management
let pendingChanges = [];

export function addPendingChange(type, endpoint, data) {
  pendingChanges.push({ type, endpoint, data });
}

export async function saveAllPendingChanges() {
  for (const change of pendingChanges) {
    try {
      if (change.type === 'PUT') {
        await putJSON(change.endpoint, change.data);
      } else if (change.type === 'POST') {
        await postJSON(change.endpoint, change.data);
      } else if (change.type === 'DELETE') {
        await deleteJSON(change.endpoint);
      }
    } catch (err) {
      console.error('Failed to save change:', err);
    }
  }
  pendingChanges = [];
}

// Auto-save before unload
window.addEventListener('beforeunload', (e) => {
  if (pendingChanges.length > 0) {
    e.preventDefault();
    e.returnValue = '';
    saveAllPendingChanges();
  }
});
