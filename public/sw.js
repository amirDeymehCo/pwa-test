self.addEventListener("install", (event) => {
  // console.log("service worker installing event >>>>", event);
});

self.addEventListener("activate", (event) => {
  // console.log("service worker activate event >>>>", event);
  return self.clients.claim();
});

// self.addEventListener("fetch", (event) => {
//   console.log("service worker fetching app event >>>", event);
//   event.respondWith(fetch(event.request));
// });
