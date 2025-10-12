/**
 * Lazy Consultant - API Utilities
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
