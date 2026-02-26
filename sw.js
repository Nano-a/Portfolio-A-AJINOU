const CACHE_NAME = 'portfolio-ajinou-v1';

const PRECACHE_URLS = [
  '/images/projects/pacman.png',
  '/images/projects/tower-defense.png',
  '/images/projects/khet.png',
  '/images/projects/website.png',
  '/images/projects/python-cert.png',
  '/images/projects/microsoft-cert.png',
  '/images/projects/movie-recommender.png',
  '/images/projects/medicinal-plant-classifier.png',
  '/images/projects/traffic-flow-predictor.png',
  '/images/projects/energy-demand-prediction.png',
  '/images/projects/placeholder-qr.png',
  '/images/og-portfolio-ajinou.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  const isImage = event.request.destination === 'image'
    || /\.(png|jpe?g|gif|webp|svg|ico)(\?|$)/i.test(url.pathname);

  if (isImage) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  const isAsset = /\.(css|js|woff2?|ttf|eot)(\?|$)/i.test(url.pathname);
  if (isAsset) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const fetchPromise = fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
        return cached || fetchPromise;
      })
    );
    return;
  }

  event.respondWith(fetch(event.request));
});
