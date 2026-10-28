/**
 * Service Worker Configuration for PWA
 * Handles caching strategy for offline capability
 */

const CACHE_NAME = 'sudoku-v1-sbu';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json'
];

// Install Event: Cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching App Shell');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch Event: Cache-First strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if available, else fetch from network
      return cachedResponse || fetch(event.request);
    })
  );
});