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
