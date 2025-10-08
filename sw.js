self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

// Optional: pass-through fetch to ensure a fetch handler exists
self.addEventListener('fetch', function(event) {
  // Default network fetch
  event.respondWith(fetch(event.request));
});

