const CACHE_NAME = "life-science-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/dna12.html",
  "/meiosis12.html",
  "/genetics12.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});