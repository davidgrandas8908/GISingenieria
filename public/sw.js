const CACHE_NAME = 'gis-ingenieria-cache-v1';
const urlsToCache = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/appointment',
  '/assets/logos/gis-logo-color.png',
  '/assets/logos/gis-logo-blanco.png',
  '/assets/logos/gis-logo-negro.png',
  '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync triggered');
}

// Push notification handling
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nueva notificación de GIS Ingeniería',
    icon: '/assets/logos/gis-logo-color.png',
    badge: '/assets/logos/gis-logo-color.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver más',
        icon: '/assets/logos/gis-logo-color.png'
      },
      {
        action: 'close',
        title: 'Cerrar',
        icon: '/assets/logos/gis-logo-color.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('GIS Ingeniería & Soluciones', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
