// GÉOCODE — Service Worker v1.0.1
// DAVIESLAY 💥 — Côte d'Ivoire

const CACHE_NAME = 'geocode-v1.0.1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './192.png',
  './512.png'
];

// INSTALL
self.addEventListener('install', event => {
  console.log('[SW GÉOCODE] Install...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .catch(e => console.warn('[SW] Cache partiel:', e))
  );
  self.skipWaiting();
});

// ACTIVATE — purge old caches
self.addEventListener('activate', event => {
  console.log('[SW GÉOCODE] Activate...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// FETCH — Network first, cache fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('firebaseio.com')) return;
  if (event.request.url.includes('googleapis.com')) return;
  if (event.request.url.includes('gstatic.com')) return;
  if (event.request.url.startsWith('chrome-extension')) return;

  event.respondWith(
    fetch(event.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return res;
      })
      .catch(() => caches.match(event.request)
        .then(cached => cached || caches.match('./index.html'))
      )
  );
});

// PUSH NOTIFICATIONS
self.addEventListener('push', event => {
  const data = event.data?.json() || {
    title: 'GÉOCODE',
    body: "⚡ C'est ton tour de jouer !",
    icon: './192.png'
  };
  event.waitUntil(
    self.registration.showNotification(data.title || 'GÉOCODE', {
      body: data.body,
      icon: './192.png',
      badge: './192.png',
      vibrate: [200, 100, 200],
      tag: 'geocode-turn',
      renotify: true,
      actions: [
        { action: 'play', title: '🎮 Jouer' },
        { action: 'dismiss', title: '✕ Ignorer' }
      ]
    })
  );
});

// NOTIFICATION CLICK
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action !== 'dismiss') {
    event.waitUntil(clients.openWindow('./'));
  }
});
