// Amell SW v7 — network-first so normal browsers always get latest code
const CACHE = 'amell-v8';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  const isAppFile =
    url.includes('/js/') ||
    url.includes('/css/') ||
    url.includes('/admin/') ||
    url.includes('.js') ||
    url.includes('.css') ||
    url.endsWith('/') ||
    url.includes('index.html') ||
    url.includes('supabase');

  if (isAppFile) {
    e.respondWith(
      fetch(e.request)
        .then(res => res)
        .catch(() => caches.match(e.request).then(r => r || caches.match('/')))
    );
    return;
  }

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
