const button = document.querySelector(".share-btn");
const sharePanel = document.querySelector(".share");

const toggleSharePanel = () => {
  sharePanel.classList.toggle("hide");
  button.parentElement.classList.toggle("author--reduce");
  button.classList.toggle("share-btn--open");
};

button.addEventListener("click", toggleSharePanel);
