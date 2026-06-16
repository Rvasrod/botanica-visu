const CACHE_NAME = 'botanica-visu-v4';
const ASSETS_TO_CACHE = [
  'index.html',
  'styles.css',
  'data.js',
  'manifest.json',
  'img/icon-192.png',
  'img/icon-512.png',
  'detective/detective.css',
  'detective/detective-storage.js',
  'detective/detective-achievements.js',
  'detective/detective-stats.js',
  'detective/detective-engine.js',
  'detective/detective-ui.js',
  'detective/detective.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (!event.request.url.startsWith('http')) return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(() => {
        if (event.request.url.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="#e0d8d0" width="400" height="400"/><text fill="#8a7a6a" font-family="sans-serif" font-size="20" text-anchor="middle" x="200" y="200">Imagen no disponible offline</text></svg>',
            { headers: { 'Content-Type': 'image/svg+xml' } }
          );
        }
        return new Response('Offline');
      });
    })
  );
});
