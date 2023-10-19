// Cached core static resources
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./icons/android-chrome-192x192.png",
        "./icons/android-chrome-512x512.png",
      ]);
    })
  );
});

// Fetch resources
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
