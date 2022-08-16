var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";
  console.log(modalPrompt);
  if (modalPrompt) {
    modalPrompt.prompt();
    modalPrompt.userChoice.then((result) => {
      console.log(result.outcome);
      if (result.outcome === "dismissed") {
        console.log("propmt delete modal cansel app");
      } else {
        console.log("add app to home scrren");
      }
      modalPrompt = null;
    });
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
