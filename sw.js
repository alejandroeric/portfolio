// Este SW se desregistra a si mismo — la app no necesita cache offline
// y el SW anterior causaba errores CORS interceptando llamadas a APIs externas
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
  self.clients.claim();
});
