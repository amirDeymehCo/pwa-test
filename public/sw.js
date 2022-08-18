self.addEventListener("install", (event) => {
  event.witeUntil(
    caches.open("static").then((cache) => {
      console.log("فایل ها در حافظه ی cachts ذخیره شدن:)");
      cache.add("/");
      cache.add("/index.html");
      cache.add("/src/css/app.css");
      cache.add("/src/css/feed.css");
      cache.add("/src/js/app.js");
      cache.add("/src/js/feed.js");
      cache.add("/src/js/material.min.js");
      cache.add("/src/images/main-image.jpg");
      cache.add("https://fonts.googleapis.com/css?family=Roboto:400,700");
      cache.add("https://fonts.googleapis.com/icon?family=Material+Icons");
      cache.add(
        "https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css"
      );
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
