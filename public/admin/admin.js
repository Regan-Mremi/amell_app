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

function loadAll() {
  categories = AmellStore.get().categories;
  loadItems();
  loadCategories();
  loadEvents();
  loadGym();
  loadReservations();
  loadSettings();
}

function loadItems() {
  const d = AmellStore.get();
  const items = d.items.map(i => ({
    ...i,
    category_name: (d.categories.find(c => c.id === i.category_id) || {}).name || ''
  }));
  document.querySelector('#itemsTable tbody').innerHTML = items.map(i =>
    '<tr><td>' + escapeHtml(i.name) + '</td><td>' + escapeHtml(i.category_name) + '</td><td>' + escapeHtml(i.price || '') + '</td><td>' + (i.is_available ? 'Yes' : 'No') + '</td><td>' +
    '<button class="btn-sm btn-edit" onclick="editItem(' + i.id + ')">Edit</button> ' +
    '<button class="btn-sm btn-delete" onclick="deleteItem(' + i.id + ')">Del</button></td></tr>'
  ).join('');
}

function addItem() {
  const name = prompt('Item name:');
  if (!name) return;
  const price = prompt('Price (e.g. TZS 25,000):') || '';
  const desc = prompt('Description:') || '';
  const d = AmellStore.get();
  const id = d.nextId.items++;
  d.items.push({
    id,
    category_id: categories[0]?.id || 1,
    name,
    description: desc,
    price,
    is_available: 1
  });
  AmellStore.set(d);
  loadItems();
}

function editItem(id) {
  const d = AmellStore.get();
  const item = d.items.find(x => x.id === id);
  if (!item) return;
  const name = prompt('Name:', item.name);
  if (name === null) return;
  const price = prompt('Price:', item.price || '');
  const desc = prompt('Description:', item.description || '');
  const avail = confirm('Available?') ? 1 : 0;
  item.name = name;
  item.price = price;
  item.description = desc;
  item.is_available = avail;
  AmellStore.set(d);
  loadItems();
}

function deleteItem(id) {
  if (!confirm('Delete this item?')) return;
  const d = AmellStore.get();
  d.items = d.items.filter(x => x.id !== id);
  AmellStore.set(d);
  loadItems();
}

function loadCategories() {
  categories = AmellStore.get().categories;
  document.querySelector('#catsTable tbody').innerHTML = categories.map(c =>
    '<tr><td>' + escapeHtml(c.name) + '</td><td>' + c.sort_order + '</td><td>' +
    '<button class="btn-sm btn-edit" onclick="editCategory(' + c.id + ')">Edit</button> ' +
    '<button class="btn-sm btn-delete" onclick="deleteCategory(' + c.id + ')">Del</button></td></tr>'
  ).join('');
}

function addCategory() {
  const name = prompt('Category name:');
  if (!name) return;
  const d = AmellStore.get();
  const id = d.nextId.categories++;
  d.categories.push({ id, name, sort_order: d.categories.length + 1 });
  AmellStore.set(d);
  loadCategories();
}

function editCategory(id) {
  const d = AmellStore.get();
  const cat = d.categories.find(c => c.id === id);
  if (!cat) return;
  const name = prompt('Name:', cat.name);
  if (name === null) return;
  const order = prompt('Sort order:', cat.sort_order);
  cat.name = name;
  cat.sort_order = parseInt(order) || 0;
  AmellStore.set(d);
  loadCategories();
}

function deleteCategory(id) {
  if (!confirm('Delete category and all its items?')) return;
  const d = AmellStore.get();
  d.categories = d.categories.filter(c => c.id !== id);
  d.items = d.items.filter(i => i.category_id !== id);
  AmellStore.set(d);
  loadCategories();
  loadItems();
}

function loadEvents() {
  const events = AmellStore.get().events;
  document.querySelector('#eventsTable tbody').innerHTML = events.map(e =>
    '<tr><td>' + escapeHtml(e.title) + '</td><td>' + (e.event_date || '') + '</td><td>' + (e.event_time || '') + '</td><td>' + (e.is_active ? 'Yes' : 'No') + '</td><td>' +
    '<button class="btn-sm btn-edit" onclick="editEvent(' + e.id + ')">Edit</button> ' +
    '<button class="btn-sm btn-delete" onclick="deleteEvent(' + e.id + ')">Del</button></td></tr>'
  ).join('');
}

function addEvent() {
  const title = prompt('Event title:');
  if (!title) return;
  const event_date = prompt('Date (YYYY-MM-DD):') || '';
  const event_time = prompt('Time (e.g. 21:00):') || '';
  const description = prompt('Description:') || '';
  const d = AmellStore.get();
  const id = d.nextId.events++;
  d.events.push({ id, title, description, event_date, event_time, is_active: 1 });
  AmellStore.set(d);
  loadEvents();
}

function editEvent(id) {
  const d = AmellStore.get();
  const e = d.events.find(x => x.id === id);
  if (!e) return;
  const title = prompt('Title:', e.title);
  if (title === null) return;
  const event_date = prompt('Date:', e.event_date || '');
  const event_time = prompt('Time:', e.event_time || '');
  const description = prompt('Description:', e.description || '');
  const is_active = confirm('Active?') ? 1 : 0;
  e.title = title;
  e.event_date = event_date;
  e.event_time = event_time;
  e.description = description;
  e.is_active = is_active;
  AmellStore.set(d);
  loadEvents();
}

function deleteEvent(id) {
  if (!confirm('Delete this event?')) return;
  const d = AmellStore.get();
  d.events = d.events.filter(x => x.id !== id);
  AmellStore.set(d);
  loadEvents();
}

function loadGym() {
  const packages = AmellStore.get().gym;
  document.querySelector('#gymTable tbody').innerHTML = packages.map(p =>
    '<tr><td>' + escapeHtml(p.name) + '</td><td>' + escapeHtml(p.price) + '</td><td>' + (p.includes_pool ? 'Yes' : 'No') + '</td><td>' + (p.is_active ? 'Yes' : 'No') + '</td><td>' +
    '<button class="btn-sm btn-edit" onclick="editGym(' + p.id + ')">Edit</button> ' +
    '<button class="btn-sm btn-delete" onclick="deleteGym(' + p.id + ')">Del</button></td></tr>'
  ).join('');
}

function addGym() {
  const name = prompt('Package name:');
  if (!name) return;
  const price = prompt('Price:') || '';
  const description = prompt('Description:') || '';
  const includes_pool = confirm('Includes pool?') ? 1 : 0;
  const d = AmellStore.get();
  const id = d.nextId.gym++;
  d.gym.push({ id, name, price, description, includes_pool, is_active: 1 });
  AmellStore.set(d);
  loadGym();
}

function editGym(id) {
  const d = AmellStore.get();
  const p = d.gym.find(x => x.id === id);
  if (!p) return;
  const name = prompt('Name:', p.name);
  if (name === null) return;
  const price = prompt('Price:', p.price);
  const description = prompt('Description:', p.description || '');
  const includes_pool = confirm('Includes pool?') ? 1 : 0;
  const is_active = confirm('Active?') ? 1 : 0;
  p.name = name;
  p.price = price;
  p.description = description;
  p.includes_pool = includes_pool;
  p.is_active = is_active;
  AmellStore.set(d);
  loadGym();
}

function deleteGym(id) {
  if (!confirm('Delete this package?')) return;
  const d = AmellStore.get();
  d.gym = d.gym.filter(x => x.id !== id);
  AmellStore.set(d);
  loadGym();
}

function loadReservations() {
  const list = AmellStore.get().reservations;
  document.querySelector('#resTable tbody').innerHTML = list.length ? list.map(r =>
    '<tr><td>' + escapeHtml(r.full_name) + '</td><td>' + escapeHtml(r.phone) + '</td><td>' + escapeHtml(r.service_type) + '</td><td>' + (r.reservation_date || '') + ' ' + (r.reservation_time || '') + '</td><td>' + r.status + '</td><td>' +
    '<button class="btn-sm btn-save" onclick="setResStatus(' + r.id + ',\'confirmed\')">Confirm</button> ' +
    '<button class="btn-sm btn-edit" onclick="setResStatus(' + r.id + ',\'cancelled\')">Cancel</button> ' +
    '<button class="btn-sm btn-delete" onclick="deleteReservation(' + r.id + ')">Delete</button></td></tr>'
  ).join('') : '<tr><td colspan="6">No reservations yet</td></tr>';
}

function setResStatus(id, status) {
  const d = AmellStore.get();
  const r = d.reservations.find(x => x.id === id);
  if (r) {
    r.status = status;
    AmellStore.set(d);
    loadReservations();
  }
}

function deleteReservation(id) {
  if (!confirm('Delete this reservation permanently?')) return;
  const d = AmellStore.get();
  d.reservations = d.reservations.filter(x => x.id !== id);
  AmellStore.set(d);
  loadReservations();
}

function loadSettings() {
  const s = AmellStore.getSettings();
  document.getElementById('set_whatsapp').value = s.whatsapp_number || '';
  document.getElementById('set_phone').value = s.phone || '';
  document.getElementById('set_address').value = s.address || '';
  document.getElementById('set_gym_hours').value = s.gym_hours || '';
  document.getElementById('set_restaurant_hours').value = s.restaurant_hours || '';
}

function saveSettings() {
  const d = AmellStore.get();
  d.settings = {
    whatsapp_number: document.getElementById('set_whatsapp').value,
    phone: document.getElementById('set_phone').value,
    address: document.getElementById('set_address').value,
    gym_hours: document.getElementById('set_gym_hours').value,
    restaurant_hours: document.getElementById('set_restaurant_hours').value
  };
  AmellStore.set(d);
  alert('Settings saved');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Check login on load
if (sessionStorage.getItem('amell_admin') === '1') {
  showAdmin();
} else {
  showLogin();
}
