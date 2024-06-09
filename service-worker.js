// Cached core static resources
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "/images/braille.png",
        "/images/coursera.webp",
        "/images/credly.webp",
        "/images/CS-114.webp",
        "/images/EE-103.webp",
        "/images/EE-227.webp",
        "/images/face.webp",
        "/images/kangaroo.webp",
        "/images/lovepurple.webp",
        "/images/ME-115.webp",
        "/images/ME-330.webp",
        "/images/othercertificates.webp",
        "/images/RIME-222.webp",
        "/images/suit.webp",
        "/icons/squared/android-chrome-192x192.png",
        "/icons/squared/android-chrome-512x512.png",
        "/styles/style.css",
        "/404.html",
        "/branding/index.html",
        "/styles/404.css",
        "/styles/branding.css",
        "/script.js",
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
