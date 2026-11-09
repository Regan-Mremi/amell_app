// Amell Admin — cloud (Supabase) + local login

function showLogin() {
  document.getElementById('loginView').style.display = 'block';
  document.getElementById('adminView').style.display = 'none';
}
function showAdmin() {
  document.getElementById('loginView').style.display = 'none';
  document.getElementById('adminView').style.display = 'block';
  loadAll();
}
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if (username === 'admin' && password === 'amell2026') {
    sessionStorage.setItem('amell_admin', '1');
    showAdmin();
  } else {
    document.getElementById('loginError').innerHTML = '<div class="error-msg">Invalid credentials</div>';
  }
}
function logout() {
  sessionStorage.removeItem('amell_admin');
  showLogin();
}
function showSection(name, btn) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.admin-nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + name).classList.add('active');
  if (btn) btn.classList.add('active');
}

let categories = [];

async function loadAll() {
  try {
    await sbSeedIfEmpty();
  } catch (e) {
    console.warn('Seed skip', e);
  }
  await loadCategories();
  await loadItems();
  await loadEvents();
  await loadGym();
  await loadReservations();
  await loadSettings();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ---- Items ----
async function loadItems() {
  try {
    const items = await sbGetItems();
    const cats = categories.length ? categories : await sbGetCategories();
    document.querySelector('#itemsTable tbody').innerHTML = items.map(i => {
      const cat = cats.find(c => Number(c.id) === Number(i.category_id));
      return '<tr><td>' + escapeHtml(i.name) + '</td><td>' + escapeHtml(cat ? cat.name : '') + '</td><td>' + escapeHtml(i.price || '') + '</td><td>' + (i.is_available ? 'Yes' : 'No') + '</td><td>' +
        '<button class="btn-sm btn-edit" onclick="editItem(' + i.id + ')">Edit</button> ' +
        '<button class="btn-sm btn-delete" onclick="deleteItem(' + i.id + ')">Del</button></td></tr>';
    }).join('') || '<tr><td colspan="5">No items</td></tr>';
  } catch (e) {
    document.querySelector('#itemsTable tbody').innerHTML = '<tr><td colspan="5">Error loading items</td></tr>';
  }
}

async function addItem() {
  const name = prompt('Item name:');
  if (!name) return;
  const price = prompt('Price (e.g. TZS 25,000):') || '';
  const desc = prompt('Description:') || '';
  const typeHint = prompt('Type: food or drinks?', 'food') || 'food';
  const catList = categories.filter(c => c.type === typeHint);
  const cat = catList[0] || categories[0];
  if (!cat) { alert('Add a category first'); return; }
  try {
    await sbCreateItem({ category_id: cat.id, name, description: desc, price, is_available: 1 });
    await loadItems();
  } catch (e) { alert('Failed to add item'); }
}

async function editItem(id) {
  const items = await sbGetItems();
  const item = items.find(x => Number(x.id) === Number(id));
  if (!item) return;
  const name = prompt('Name:', item.name);
  if (name === null) return;
  const price = prompt('Price:', item.price || '');
  const desc = prompt('Description:', item.description || '');
  const avail = confirm('Available?') ? 1 : 0;
  try {
    await sbUpdateItem(id, { name, price, description: desc, is_available: avail, category_id: item.category_id });
    await loadItems();
  } catch (e) { alert('Failed to update'); }
}

async function deleteItem(id) {
  if (!confirm('Delete this item?')) return;
  try {
    await sbDeleteItem(id);
    await loadItems();
  } catch (e) { alert('Failed to delete'); }
}

// ---- Categories ----
async function loadCategories() {
  try {
    categories = await sbGetCategories();
    document.querySelector('#catsTable tbody').innerHTML = categories.map(c =>
      '<tr><td>' + escapeHtml(c.name) + '</td><td>' + (c.type || '') + ' / ' + c.sort_order + '</td><td>' +
      '<button class="btn-sm btn-edit" onclick="editCategory(' + c.id + ')">Edit</button> ' +
      '<button class="btn-sm btn-delete" onclick="deleteCategory(' + c.id + ')">Del</button></td></tr>'
    ).join('') || '<tr><td colspan="3">No categories</td></tr>';
  } catch (e) {
    document.querySelector('#catsTable tbody').innerHTML = '<tr><td colspan="3">Error loading</td></tr>';
  }
}

async function addCategory() {
  const name = prompt('Category name:');
  if (!name) return;
  const type = prompt('Type: food or drinks?', 'food') || 'food';
  try {
    await sbCreateCategory({ name, sort_order: categories.length + 1, type });
    await loadCategories();
    await loadItems();
  } catch (e) { alert('Failed to add category'); }
}

async function editCategory(id) {
  const cat = categories.find(c => Number(c.id) === Number(id));
  if (!cat) return;
  const name = prompt('Name:', cat.name);
  if (name === null) return;
  const type = prompt('Type food/drinks:', cat.type || 'food');
  const order = prompt('Sort order:', cat.sort_order);
  try {
    await sbUpdateCategory(id, { name, type, sort_order: parseInt(order) || 0 });
    await loadCategories();
    await loadItems();
  } catch (e) { alert('Failed to update'); }
}

async function deleteCategory(id) {
  if (!confirm('Delete category and all its items?')) return;
  try {
    await sbDeleteCategory(id);
    await loadCategories();
    await loadItems();
  } catch (e) { alert('Failed to delete'); }
}

// ---- Events ----
async function loadEvents() {
  try {
    const events = await sbGetEvents(false);
    document.querySelector('#eventsTable tbody').innerHTML = events.map(e =>
      '<tr><td>' + escapeHtml(e.title) + '</td><td>' + (e.event_date || '') + '</td><td>' + (e.event_time || '') + '</td><td>' + (e.is_active ? 'Yes' : 'No') + '</td><td>' +
      '<button class="btn-sm btn-edit" onclick="editEvent(' + e.id + ')">Edit</button> ' +
      '<button class="btn-sm btn-delete" onclick="deleteEvent(' + e.id + ')">Del</button></td></tr>'
    ).join('') || '<tr><td colspan="5">No events</td></tr>';
  } catch (e) {
    document.querySelector('#eventsTable tbody').innerHTML = '<tr><td colspan="5">Error loading</td></tr>';
  }
}

async function addEvent() {
  const title = prompt('Event title:');
  if (!title) return;
  const event_date = prompt('Date (YYYY-MM-DD):') || '';
  const event_time = prompt('Time:') || '';
  const description = prompt('Description:') || '';
  try {
    await sbCreateEvent({ title, description, event_date, event_time, is_active: 1 });
    await loadEvents();
  } catch (e) { alert('Failed to add'); }
}

async function editEvent(id) {
  const events = await sbGetEvents(false);
  const e = events.find(x => Number(x.id) === Number(id));
  if (!e) return;
  const title = prompt('Title:', e.title);
  if (title === null) return;
  const event_date = prompt('Date:', e.event_date || '');
  const event_time = prompt('Time:', e.event_time || '');
  const description = prompt('Description:', e.description || '');
  const is_active = confirm('Active?') ? 1 : 0;
  try {
    await sbUpdateEvent(id, { title, event_date, event_time, description, is_active });
    await loadEvents();
  } catch (err) { alert('Failed'); }
}

async function deleteEvent(id) {
  if (!confirm('Delete this event?')) return;
  try {
    await sbDeleteEvent(id);
    await loadEvents();
  } catch (e) { alert('Failed'); }
}

// ---- Gym ----
async function loadGym() {
  try {
    const packages = await sbGetGym(false);
    document.querySelector('#gymTable tbody').innerHTML = packages.map(p =>
      '<tr><td>' + escapeHtml(p.name) + '</td><td>' + escapeHtml(p.price) + '</td><td>' + (p.includes_pool ? 'Yes' : 'No') + '</td><td>' + (p.is_active ? 'Yes' : 'No') + '</td><td>' +
      '<button class="btn-sm btn-edit" onclick="editGym(' + p.id + ')">Edit</button> ' +
      '<button class="btn-sm btn-delete" onclick="deleteGym(' + p.id + ')">Del</button></td></tr>'
    ).join('') || '<tr><td colspan="5">No packages</td></tr>';
  } catch (e) {
    document.querySelector('#gymTable tbody').innerHTML = '<tr><td colspan="5">Error loading</td></tr>';
  }
}

async function addGym() {
  const name = prompt('Package name:');
  if (!name) return;
  const price = prompt('Price:') || '';
  const description = prompt('Description:') || '';
  const includes_pool = confirm('Includes pool?') ? 1 : 0;
  try {
    await sbCreateGym({ name, price, description, includes_pool, is_active: 1 });
    await loadGym();
  } catch (e) { alert('Failed'); }
}

async function editGym(id) {
  const packages = await sbGetGym(false);
  const p = packages.find(x => Number(x.id) === Number(id));
  if (!p) return;
  const name = prompt('Name:', p.name);
  if (name === null) return;
  const price = prompt('Price:', p.price);
  const description = prompt('Description:', p.description || '');
  const includes_pool = confirm('Includes pool?') ? 1 : 0;
  const is_active = confirm('Active?') ? 1 : 0;
  try {
    await sbUpdateGym(id, { name, price, description, includes_pool, is_active });
    await loadGym();
  } catch (e) { alert('Failed'); }
}

async function deleteGym(id) {
  if (!confirm('Delete this package?')) return;
  try {
    await sbDeleteGym(id);
    await loadGym();
  } catch (e) { alert('Failed'); }
}

// ---- Reservations ----
async function loadReservations() {
  const tbody = document.querySelector('#resTable tbody');
  tbody.innerHTML = '<tr><td colspan="6">Loading…</td></tr>';
  try {
    const list = await sbGetReservations();
    tbody.innerHTML = list.length ? list.map(r =>
      '<tr><td>' + escapeHtml(r.full_name) + '</td><td>' + escapeHtml(r.phone) + '</td><td>' + escapeHtml(r.service_type) + '</td><td>' + (r.reservation_date || '') + ' ' + (r.reservation_time || '') + '</td><td>' + r.status + '</td><td>' +
      '<button class="btn-sm btn-save" onclick="setResStatus(' + r.id + ',\'confirmed\')">Confirm</button> ' +
      '<button class="btn-sm btn-edit" onclick="setResStatus(' + r.id + ',\'cancelled\')">Cancel</button> ' +
      '<button class="btn-sm btn-delete" onclick="deleteReservation(' + r.id + ')">Delete</button></td></tr>'
    ).join('') : '<tr><td colspan="6">No reservations yet</td></tr>';
  } catch (e) {
    tbody.innerHTML = '<tr><td colspan="6">Could not load reservations</td></tr>';
  }
}
async function setResStatus(id, status) {
  try { await sbUpdateReservation(id, status); await loadReservations(); }
  catch (e) { alert('Failed to update'); }
}
async function deleteReservation(id) {
  if (!confirm('Delete this reservation permanently?')) return;
  try { await sbDeleteReservation(id); await loadReservations(); }
  catch (e) { alert('Failed to delete'); }
}

// ---- Settings ----
async function loadSettings() {
  try {
    const s = await sbGetSettings();
    const local = AmellStore.getSettings();
    document.getElementById('set_whatsapp').value = s.whatsapp_number || local.whatsapp_number || '';
    document.getElementById('set_phone').value = s.phone || local.phone || '';
    document.getElementById('set_address').value = s.address || local.address || '';
    document.getElementById('set_gym_hours').value = s.gym_hours || local.gym_hours || '';
    document.getElementById('set_restaurant_hours').value = s.restaurant_hours || local.restaurant_hours || '';
  } catch (e) {
    const s = AmellStore.getSettings();
    document.getElementById('set_whatsapp').value = s.whatsapp_number || '';
    document.getElementById('set_phone').value = s.phone || '';
    document.getElementById('set_address').value = s.address || '';
    document.getElementById('set_gym_hours').value = s.gym_hours || '';
    document.getElementById('set_restaurant_hours').value = s.restaurant_hours || '';
  }
}
async function saveSettings() {
  const data = {
    whatsapp_number: document.getElementById('set_whatsapp').value,
    phone: document.getElementById('set_phone').value,
    address: document.getElementById('set_address').value,
    gym_hours: document.getElementById('set_gym_hours').value,
    restaurant_hours: document.getElementById('set_restaurant_hours').value
  };
  try {
    await sbSaveSettings(data);
    alert('Settings saved (all devices)');
  } catch (e) {
    alert('Failed to save settings');
  }
}

if (sessionStorage.getItem('amell_admin') === '1') showAdmin();
else showLogin();
