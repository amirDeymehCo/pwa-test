if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("service worker registering!:)");
  });
}

var addApp;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  addApp = event;
  return false;
});
