var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);
const installApp = document.getElementById("install-app");

installApp.addEventListener("click", () => {
  console.log("click btn install");
  if (addApp) {
    addApp.prompt();
    addApp.userChoice.then((result) => {
      console.log(result.outcome);
      if (result.outcome === "dismissed") {
        console.log("کابر برنامه را نصب نکرد:(");
      } else {
        console.log("کاربر برنامه را نصب کرد:)");
      }

      addApp = null;
    });
  }
});

function openCreatePostModal() {
  createPostArea.style.display = "block";
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
