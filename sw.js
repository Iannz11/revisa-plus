const CACHE = 'revisaplus-offline-v1';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./favicon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('revisaplus-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request).then(response => {
    if (response.ok) { const clone=response.clone(); caches.open(CACHE).then(cache=>cache.put(event.request,clone)); }
    return response;
  }).catch(() => event.request.mode==='navigate' ? caches.match('./index.html') : Response.error())));
});
