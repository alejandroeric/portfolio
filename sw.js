const CACHE = 'pip-v4';
const ASSETS = ['/portfolio/logopagina.jpg', '/portfolio/logoapp.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // index.html siempre desde la red — nunca desde cache
  if(e.request.url.includes('/portfolio/') && !e.request.url.match(/\.(jpg|png|ico|svg|js|css)$/)) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }
  // Assets estáticos: cache first
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
