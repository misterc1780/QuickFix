self.addEventListener("install", () => {
  console.log("QuickFix instalada como PWA");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});