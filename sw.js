// GÉOCODE — Service Worker v1.0
// DAVIESLAY 💥

const CACHE_NAME = 'geocode-v1.0.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=Space+Mono:wght@400;700&display=swap'
];

// Install — cache all assets
self.addEventListener('install', event => {
  console.log('[SW] Installing GÉOCODE v1.0.0...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE.filter(url => !url.startsWith('http')));
    }).catch(err => console.log('[SW] Cache install error:', err))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating GÉOCODE...');
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', event => {
  // Skip non-GET and chrome-extension
  if (event.request.method !== 'GET') return;
  if (event.request.url.startsWith('chrome-extension')) return;

  // Firebase realtime: always network
  if (event.request.url.includes('firebaseio.com') ||
      event.request.url.includes('firebase') ||
      event.request.url.includes('googleapis.com/firebase')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache
        return caches.match(event.request).then(cached => {
          return cached || caches.match('./index.html');
        });
      })
  );
});

// Push notifications
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {
    title: 'GÉOCODE',
    body: '⚡ C\'est ton tour !',
    icon: './icon-192.png'
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'GÉOCODE', {
      body: data.body || 'Notification',
      icon: './icon-192.png',
      badge: './icon-192.png',
      vibrate: [200, 100, 200],
      data: data,
      actions: [
        { action: 'open', title: '🎮 Jouer' },
        { action: 'close', title: '✕ Fermer' }
      ]
    })
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow('./')
    );
  }
});
