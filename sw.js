const CACHE_NAME = 'al-master-flow-v1';
const assets = [
  '/',
  '/index.html',
  '/pomodoro/pomo.html',
  '/pomodoro/pomo.css',
  '/pomodoro/pomo.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
