const self = this;

const cacheName = 'v2';
// const cachedAssets = [
//   'index.html', 
//   'images/LoHi-computer-1.png',
//   '/src/index.css',
//   'images/Lohi-yellow.png'
// ]

self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
  
  // e.waitUntil(
  //   caches
  //     .open(cacheName)
  //     .then(cache => {
  //       console.log('Service Worker: Caching Files')
  //       cache.addAll(cachedAssets);
  //     })
  //     .then(() => self.skipWaiting())
  // );
})

self.addEventListener('activate', e => {
  console.log('ServiceWorker: Activated');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => { // eslint-disable-line
          if(cache !== cacheName) {
            console.log('Service Worker: clearing old cache');
            return caches.delete(cache);
          }
        })
      )
    })
  );
});

self.addEventListener('fetch', e => {
  console.log('Service Worker: fetching');
  e.respondWith(
    fetch(e.request)
      .then(res => {
        //Make clone of response
        const resClone = res.clone();
        //Open cache
        caches
          .open(cacheName)
          .then(cache => {
            //Add response to cache
            cache.put(e.request, resClone);
          });
        return res;
      }).catch(err => caches.match(e.request).then(res => res))
      
    );
});


//Previous fetch*****
// self.addEventListener('fetch', e => {
//   console.log('Service Worker: fetching');
//   e.respondWith(
//     fetch(e.request).catch(() => caches.match(e.request))
//     )
// })