const button = document.querySelector(".share-btn");
const sharePanel = document.querySelector(".share");

const toggleSharePanel = () => {
  sharePanel.classList.toggle("hide");
  button.parentElement.classList.toggle("author--reduce");
  button.classList.toggle("share-btn--open");
  button.setAttribute("aria-expanded", !sharePanel.classList.contains("hide"));
};

button.addEventListener("click", toggleSharePanel);
