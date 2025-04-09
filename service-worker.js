const CACHE_NAME = 'Tinder-pwa-app';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './home.html',
  './registro.html',
  './style.css',
  './img/logo.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
  
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});