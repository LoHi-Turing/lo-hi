const self = this;

const cacheName = 'v1';
const cachedAssets = [
  'index.html', 
  'images/Lohi-computer-1.png',
  '/src/index.css'
]

self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
  
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files')
        cache.addAll(cachedAssets);
      })
      .then(() => self.skipWaiting())
  );
})

self.addEventListener('activate', e => {
  console.log('ServiceWorker: Activated');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if()
        })
      )
    })
  );
})