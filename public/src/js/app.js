var modalPrompt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("service worker registering!:)");
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt event >>>> ");
  event.preventDefault();
  modalPrompt = event;
  return false;
});
