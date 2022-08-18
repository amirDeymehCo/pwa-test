self.addEventListener("install", (event) => {
  event.witeUntil(
    caches.open("static").then((cache) => {
      console.log("فایل ها در حافظه ی cachts ذخیره شدن:)");
      cache.add("/");
      cache.add("/index.html");
    })
  );
});

self.addEventListener("activate", (event) => {
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
