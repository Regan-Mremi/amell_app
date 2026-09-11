// Supabase — shared cloud data for Amell In Dar
const SUPABASE_URL = 'https://lfchstxykxtnyienkseh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmY2hzdHh5a3h0bnlpZW5rc2VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MTkzNzksImV4cCI6MjEwMTI5NTM3OX0.6IAEYifKKx0XKXTuoi2B0kX2ws-IS0wIw0uu4Lnp3wM';

const sbHeaders = {
  'apikey': SUPABASE_KEY,
  'Authorization': 'Bearer ' + SUPABASE_KEY,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

async function sbFetch(path, options = {}) {
  const res = await fetch(SUPABASE_URL + '/rest/v1/' + path, {
    ...options,
    headers: { ...sbHeaders, ...(options.headers || {}) }
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || res.statusText);
  }
  if (res.status === 204) return null;
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}


// ---------- Notifications (phone push via ntfy) ----------
// Install free app "ntfy" on your phone and subscribe to topic: amell-dar-bookings
const NTFY_TOPIC = 'amell-dar-bookings';

async function notifyNewReservation(data) {
  try {
    const msg =
      'New reservation\n' +
      'Name: ' + (data.full_name || '') + '\n' +
      'Phone: ' + (data.phone || '') + '\n' +
      'Service: ' + (data.service_type || '') + '\n' +
      'Date: ' + (data.reservation_date || '') + ' ' + (data.reservation_time || '') + '\n' +
      'Guests: ' + (data.guests || 1) + '\n' +
      (data.notes ? 'Notes: ' + data.notes : '');
    await fetch('https://ntfy.sh/' + NTFY_TOPIC, {
      method: 'POST',
      headers: {
        'Title': 'Amell In Dar – New Booking',
        'Priority': 'high',
        'Tags': 'calendar,bell'
      },
      body: msg
    });
  } catch (e) {
    console.warn('Notify failed', e);
  }
}

async function sbCreateReservation(data) {
  const result = await sbFetch('reservations', {
    method: 'POST',
    body: JSON.stringify({
      full_name: data.full_name, phone: data.phone, email: data.email || '',
      service_type: data.service_type, reservation_date: data.reservation_date,
      reservation_time: data.reservation_time || '', guests: parseInt(data.guests) || 1,
      notes: data.notes || '', status: 'pending'
    })
  });
  notifyNewReservation({
    full_name: data.full_name,
    phone: data.phone,
    service_type: data.service_type,
    reservation_date: data.reservation_date,
    reservation_time: data.reservation_time || '',
    guests: data.guests || 1,
    notes: data.notes || ''
  });
  return result;
}
async function sbGetReservations() {
  return (await sbFetch('reservations?select=*&order=created_at.desc')) || [];
}
async function sbUpdateReservation(id, status) {
  return sbFetch('reservations?id=eq.' + id, { method: 'PATCH', body: JSON.stringify({ status }) });
}
async function sbDeleteReservation(id) {
  return sbFetch('reservations?id=eq.' + id, { method: 'DELETE' });
}

async function sbGetCategories() {
  return (await sbFetch('menu_categories?select=*&order=sort_order.asc')) || [];
}
async function sbCreateCategory(data) {
  const rows = await sbFetch('menu_categories', {
    method: 'POST',
    body: JSON.stringify({ name: data.name, sort_order: data.sort_order || 0, type: data.type || 'food' })
  });
  return rows && rows[0];
}
async function sbUpdateCategory(id, data) {
  return sbFetch('menu_categories?id=eq.' + id, { method: 'PATCH', body: JSON.stringify(data) });
}
async function sbDeleteCategory(id) {
  await sbFetch('menu_items?category_id=eq.' + id, { method: 'DELETE' });
  return sbFetch('menu_categories?id=eq.' + id, { method: 'DELETE' });
}

async function sbGetItems() {
  return (await sbFetch('menu_items?select=*&order=sort_order.asc')) || [];
}
async function sbCreateItem(data) {
  const rows = await sbFetch('menu_items', {
    method: 'POST',
    body: JSON.stringify({
      category_id: data.category_id, name: data.name, description: data.description || '',
      price: data.price || '', is_available: data.is_available !== undefined ? data.is_available : 1,
      sort_order: data.sort_order || 0
    })
  });
  return rows && rows[0];
}
async function sbUpdateItem(id, data) {
  return sbFetch('menu_items?id=eq.' + id, { method: 'PATCH', body: JSON.stringify(data) });
}
async function sbDeleteItem(id) {
  return sbFetch('menu_items?id=eq.' + id, { method: 'DELETE' });
}

async function sbGetEvents(activeOnly) {
  let q = 'events?select=*&order=event_date.asc';
  if (activeOnly) q += '&is_active=eq.1';
  return (await sbFetch(q)) || [];
}
async function sbCreateEvent(data) {
  const rows = await sbFetch('events', {
    method: 'POST',
    body: JSON.stringify({
      title: data.title, description: data.description || '', event_date: data.event_date || '',
      event_time: data.event_time || '', is_active: data.is_active !== undefined ? data.is_active : 1
    })
  });
  return rows && rows[0];
}
async function sbUpdateEvent(id, data) {
  return sbFetch('events?id=eq.' + id, { method: 'PATCH', body: JSON.stringify(data) });
}
async function sbDeleteEvent(id) {
  return sbFetch('events?id=eq.' + id, { method: 'DELETE' });
}

async function sbGetGym(activeOnly) {
  let q = 'gym_packages?select=*&order=id.asc';
  if (activeOnly) q += '&is_active=eq.1';
  return (await sbFetch(q)) || [];
}
async function sbCreateGym(data) {
  const rows = await sbFetch('gym_packages', {
    method: 'POST',
    body: JSON.stringify({
      name: data.name, price: data.price || '', description: data.description || '',
      includes_pool: data.includes_pool ? 1 : 0, is_active: data.is_active !== undefined ? data.is_active : 1
    })
  });
  return rows && rows[0];
}
async function sbUpdateGym(id, data) {
  const body = { ...data };
  if ('includes_pool' in body) body.includes_pool = body.includes_pool ? 1 : 0;
  return sbFetch('gym_packages?id=eq.' + id, { method: 'PATCH', body: JSON.stringify(body) });
}
async function sbDeleteGym(id) {
  return sbFetch('gym_packages?id=eq.' + id, { method: 'DELETE' });
}

async function sbGetRooftop() {
  const rows = (await sbFetch('rooftop_info?id=eq.1')) || [];
  return rows[0] || null;
}
async function sbUpdateRooftop(data) {
  const existing = await sbGetRooftop();
  if (existing) {
    return sbFetch('rooftop_info?id=eq.1', { method: 'PATCH', body: JSON.stringify(data) });
  }
  return sbFetch('rooftop_info', { method: 'POST', body: JSON.stringify({ id: 1, ...data }) });
}

async function sbGetSettings() {
  const rows = (await sbFetch('site_settings?select=*')) || [];
  const obj = {};
  rows.forEach(r => { obj[r.key] = r.value; });
  return obj;
}
async function sbSaveSettings(settings) {
  for (const key of Object.keys(settings)) {
    await sbFetch('site_settings', {
      method: 'POST',
      headers: { ...sbHeaders, 'Prefer': 'resolution=merge-duplicates,return=minimal' },
      body: JSON.stringify({ key, value: settings[key] })
    });
  }
  return true;
}

async function sbGetMenu(type) {
  const [categories, items] = await Promise.all([sbGetCategories(), sbGetItems()]);
  return categories
    .filter(c => !type || c.type === type)
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    .map(c => ({
      ...c,
      items: items.filter(i => Number(i.category_id) === Number(c.id) && i.is_available)
    }))
    .filter(c => c.items.length > 0);
}

async function sbSeedIfEmpty() {
  const cats = await sbGetCategories();
  if (cats.length > 0) return false;
  const d = AmellStore.defaultData();
  for (const c of d.categories) {
    await sbFetch('menu_categories', {
      method: 'POST',
      body: JSON.stringify({ name: c.name, sort_order: c.sort_order, type: c.type })
    });
  }
  const newCats = await sbGetCategories();
  const idMap = {};
  d.categories.forEach(old => {
    const match = newCats.find(n => n.name === old.name && n.type === old.type);
    if (match) idMap[old.id] = match.id;
  });
  for (const item of d.items) {
    const cid = idMap[item.category_id];
    if (!cid) continue;
    await sbFetch('menu_items', {
      method: 'POST',
      body: JSON.stringify({
        category_id: cid, name: item.name, description: item.description || '',
        price: item.price || '', is_available: 1, sort_order: 0
      })
    });
  }
  for (const e of d.events) await sbCreateEvent(e);
  for (const g of d.gym) await sbCreateGym(g);
  await sbUpdateRooftop(d.rooftop);
  await sbSaveSettings(d.settings);
  return true;
}
