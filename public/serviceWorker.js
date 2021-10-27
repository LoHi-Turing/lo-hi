const self = this;

self.addEventListener('install', e => {
  console.log('Service Worker: Installed')
})

self.addEventListener('activate', e => {
  console.log('ServiceWorker: Activated')
})