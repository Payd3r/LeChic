const CACHE_NAME = 'lechic-v1';
const STATIC_CACHE = 'lechic-static-v1';
const DYNAMIC_CACHE = 'lechic-dynamic-v1';

// Risorse da cachare immediatamente
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/11.jpg',
  '/13.jpg',
  '/product/1.jpg',
  '/product/2.jpg',
  '/product/3.jpg',
  '/result/4.jpg',
  '/result/5.jpg'
];

// Installa il service worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
  );
});

// Attiva il service worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Activated');
      return self.clients.claim();
    })
  );
});

// Gestisce le richieste di rete
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo richieste same-origin
  if (url.origin !== location.origin) {
    return;
  }

  // Strategia di cache
  if (request.destination === 'image') {
    // Strategia Cache First per le immagini
    event.respondWith(cacheFirstStrategy(request));
  } else if (request.destination === 'script' || request.destination === 'style') {
    // Strategia Cache First per JS e CSS
    event.respondWith(cacheFirstStrategy(request));
  } else {
    // Strategia Network First per HTML e altri contenuti
    event.respondWith(networkFirstStrategy(request));
  }
});

// Strategia Cache First - prova prima la cache, poi la rete
async function cacheFirstStrategy(request) {
  try {
    const cacheResponse = await caches.match(request);
    if (cacheResponse) {
      return cacheResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache First Strategy failed:', error);
    
    // Fallback per immagini
    if (request.destination === 'image') {
      return new Response(
        '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#f1f5f9"/><text x="50" y="50" font-size="14" fill="#94a3b8" text-anchor="middle" dy=".3em">Offline</text></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      );
    }
    
    throw error;
  }
}

// Strategia Network First - prova prima la rete, poi la cache
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Network request failed, trying cache:', error);
    
    const cacheResponse = await caches.match(request);
    if (cacheResponse) {
      return cacheResponse;
    }
    
    // Fallback per navigazione
    if (request.mode === 'navigate') {
      const fallbackResponse = await caches.match('/');
      if (fallbackResponse) {
        return fallbackResponse;
      }
    }
    
    throw error;
  }
}

// Gestisce i messaggi dal client
self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'GET_CACHE_SIZE') {
    getCacheSize().then((size) => {
      event.ports[0].postMessage({ cacheSize: size });
    });
  }
});

// Calcola la dimensione della cache
async function getCacheSize() {
  const cacheNames = await caches.keys();
  let totalSize = 0;
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }
  
  return totalSize;
}
