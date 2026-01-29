const button = document.querySelector(".share-btn");
const sharePanel = document.querySelector(".share");

button.addEventListener("click", () => {
  sharePanel.classList.toggle("hide");
  button.parentElement.classList.toggle("reduce");
});
