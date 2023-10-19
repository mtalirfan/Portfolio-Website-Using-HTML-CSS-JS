// Cached core static resources
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./images/face.jpg",
        "./images/coursera.jpg",
        "./images/credly.jpg",
        "./images/othercertificates.jpg",
        "./icons/android-chrome-192x192.png",
        "./icons/android-chrome-512x512.png",
        "./styles/style.css",
        "./404.html",
        "./styles/404.css",
        "./script.js",
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
