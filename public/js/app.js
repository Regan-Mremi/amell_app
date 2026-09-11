// Amell In Dar – Customer App (pure static + localStorage)

let currentMenuType = 'food';

function showPage(id) {
  document.querySelectorAll('.page, .home-screen').forEach(el => {
    el.classList.remove('active');
    el.style.display = 'none';
  });
  if (id === 'home') {
    const home = document.getElementById('home');
    home.style.display = 'block';
    home.classList.add('active');
    window.scrollTo(0, 0);
    return;
  }
  const page = document.getElementById(id);
  if (page) {
    page.style.display = 'block';
    page.classList.add('active');
    window.scrollTo(0, 0);
    if (id === 'menu') loadMenu(currentMenuType);
    if (id === 'rooftop') loadRooftop();
    if (id === 'gym') loadGym();
    if (id === 'events') loadEvents();
  }
}

async function loadSettings() {
  let data;
  try { data = await sbGetSettings(); } catch { data = {}; }
  if (!data || !data.whatsapp_number) {
    data = { ...AmellStore.getSettings(), ...data };
  }
  const wa = data.whatsapp_number || '255679770888';
  const btn = document.getElementById('whatsappBtn');
  if (btn) {
    btn.href = 'https://wa.me/' + wa + '?text=' + encodeURIComponent('Hello Amell In Dar, I would like to inquire about...');
  }
}


function switchMenu(type) {
  currentMenuType = type;
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  const active = document.getElementById('tab-' + type);
  if (active) active.classList.add('active');
  const search = document.getElementById('menuSearch');
  if (search) search.value = '';
  loadMenu(type);
}

function filterMenu() {
  const q = (document.getElementById('menuSearch')?.value || '').trim().toLowerCase();
  const type = currentMenuType || 'food';
  renderMenuList(type, q);
}

async function loadMenu(type) {
  type = type || currentMenuType || 'food';
  currentMenuType = type;
  const el = document.getElementById('menuContent');
  el.innerHTML = '<div class="loading">Loading menu…</div>';
  try {
    let html = `
      <div class="menu-tabs">
        <button id="tab-food" class="menu-tab ${type === 'food' ? 'active' : ''}" onclick="switchMenu('food')">🍽️ Food</button>
        <button id="tab-drinks" class="menu-tab ${type === 'drinks' ? 'active' : ''}" onclick="switchMenu('drinks')">🍹 Drinks</button>
      </div>
      <div class="menu-search-wrap">
        <input type="search" id="menuSearch" class="menu-search" placeholder="Search food or drink…" oninput="filterMenu()" autocomplete="off">
      </div>
      <div id="menuList"></div>
    `;
    el.innerHTML = html;
    renderMenuList(type, '');
  } catch (e) {
    el.innerHTML = '<div class="error-msg">Unable to load menu.</div>';
  }
}

async function renderMenuList(type, query) {
  const listEl = document.getElementById('menuList');
  if (!listEl) return;
  let categories;
  try { categories = await sbGetMenu(type); }
  catch { categories = AmellStore.getMenu(type); }
  let html = '';
  if (type === 'food') {
    html += '<div class="info-box">Swahili Food Menu • Prices in TZS • Mon–Fri 12:00–15:00 lunch specials available</div>';
  } else {
    html += '<div class="info-box">Full drinks menu • Prices in TZS • Subject to availability</div>';
  }
  let found = 0;
  categories.forEach(cat => {
    if (!cat.items || !cat.items.length) return;
    const items = query
      ? cat.items.filter(i =>
          (i.name || '').toLowerCase().includes(query) ||
          (i.description || '').toLowerCase().includes(query) ||
          (cat.name || '').toLowerCase().includes(query)
        )
      : cat.items;
    if (!items.length) return;
    html += '<div class="category-title">' + cat.name + '</div>';
    items.forEach(item => {
      found++;
      html += '<div class="card"><h3>' + item.name + '</h3>' +
        (item.description ? '<p>' + item.description + '</p>' : '') +
        '<div class="price">' + (item.price || '') + '</div></div>';
    });
  });
  if (query && found === 0) {
    html += '<div class="info-box">No items match "' + query.replace(/</g,'') + '". Try another word.</div>';
  }
  if (!query && found === 0) {
    html = '<div class="info-box">Menu coming soon. Please check back or WhatsApp us.</div>';
  }
  listEl.innerHTML = html;
}

async function loadRooftop() {
  const el = document.getElementById('rooftopContent');
  el.innerHTML = '<div class="loading">Loading…</div>';
  try {
    let data = null;
    try { data = await sbGetRooftop(); } catch {}
    if (!data) data = AmellStore.getRooftop();
    el.innerHTML = '<div class="card"><h3>' + (data.title || 'Rooftop & Pool') + '</h3><p style="margin-top:10px;line-height:1.6">' + (data.description || '') + '</p><p style="margin-top:14px;color:var(--gold-light)"><strong>Hours:</strong> ' + (data.opening_hours || 'Daily') + '</p></div><div class="info-box">🏊 Crystal-clear rooftop pool<br>🌆 Panoramic Dar es Salaam skyline views<br>🍹 Poolside service available<br>📍 PSSSF Tower, 5th Floor</div><a class="btn" onclick="showPage(\'reservations\')">Reserve Pool / Lounge</a>';
  } catch (e) {
    el.innerHTML = '<div class="error-msg">Unable to load information.</div>';
  }
}

async function loadGym() {
  const el = document.getElementById('gymContent');
  el.innerHTML = '<div class="loading">Loading packages…</div>';
  try {
    let packages = [];
    try { packages = await sbGetGym(true); } catch {}
    if (!packages.length) packages = AmellStore.getGym();
    let html = '<div class="info-box"><strong>Amell Body Dial Gym</strong><br>Modern equipment • Cardio & strength • Open daily 05:00 – 21:00<br>Insurance accepted: Jubilee, Strategis, AAR, Britam & more</div>';
    packages.forEach(p => {
      html += '<div class="card"><h3>' + p.name + '</h3><p>' + (p.description || '') + '</p>' + (p.includes_pool ? '<p style="color:#6EE7A0;font-size:13px;margin-top:4px">✓ Includes swimming pool access</p>' : '') + '<div class="price">' + p.price + '</div></div>';
    });
    html += '<a class="btn" onclick="showPage(\'reservations\')" style="margin-top:10px">Book Gym / Training</a>';
    el.innerHTML = html;
  } catch (e) {
    el.innerHTML = '<div class="error-msg">Unable to load gym packages.</div>';
  }
}

async function loadEvents() {
  const el = document.getElementById('eventsContent');
  el.innerHTML = '<div class="loading">Loading events…</div>';
  try {
    let events = [];
    try { events = await sbGetEvents(true); } catch {}
    if (!events.length) events = AmellStore.getEvents();
    if (!events.length) {
      el.innerHTML = '<div class="info-box">No upcoming events published yet. Follow us or WhatsApp for the latest.</div>';
      return;
    }
    let html = '';
    events.forEach(ev => {
      const dateStr = ev.event_date ? new Date(ev.event_date + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }) : '';
      html += '<div class="card"><h3>' + ev.title + '</h3><p style="color:var(--gold-light);font-size:13px;margin:6px 0">' + dateStr + (ev.event_time ? ' • ' + ev.event_time : '') + '</p><p>' + (ev.description || '') + '</p></div>';
    });
    el.innerHTML = html;
  } catch (e) {
    el.innerHTML = '<div class="error-msg">Unable to load events.</div>';
  }
}

document.getElementById('reservationForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type=submit]');
  const msg = document.getElementById('resMsg');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  msg.innerHTML = '';
  const data = Object.fromEntries(new FormData(form));
  try {
    await sbCreateReservation(data);
    msg.innerHTML = '<div class="success-msg">Reservation request received! We will confirm shortly via phone or WhatsApp.</div>';
    form.reset();
  } catch (err) {
    console.error(err);
    // fallback to local if offline
    try {
      AmellStore.addReservation(data);
      msg.innerHTML = '<div class="success-msg">Reservation saved offline. We will confirm shortly.</div>';
      form.reset();
    } catch {
      msg.innerHTML = '<div class="error-msg">Please try WhatsApp instead.</div>';
    }
  }
  btn.disabled = false;
  btn.textContent = 'Request Reservation';
});

loadSettings();
document.getElementById('home').style.display = 'block';
document.getElementById('home').classList.add('active');
