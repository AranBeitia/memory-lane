import { buildLayout, endHTML, galleryHTML } from "./main.js";
import { startCounter, stopandReturn, timeScore, counting } from "./timer.js";

function startGame() {
  setTimeout(() => {
    hideAllImages();

    startCounter();
  }, 3000);

  let visibleCards = 0;

  document.querySelector(".grid").addEventListener("click", function (e) {
    let item = e.target.parentElement;
    if (item.classList.contains("flip-image-inner")) {
      // Preventing clicking more than 2 elements
      if (document.querySelectorAll(".selected").length < 2) {
        visibleCards++;
        item.classList.add("selected");
      }
      // Preventing clicking more than 2 elements
      if (visibleCards === 2) {
        setTimeout(validateCards, 750);
        visibleCards = 0;
      }
    }
  });
}

function hideAllImages() {
  document.querySelectorAll(".flip-image-inner").forEach((elm) => {
    elm.classList.remove("show");
  });
}

function validateCards() {
  let imageContainer = document.querySelectorAll(".selected");
  let image = document.querySelectorAll(".selected img");

  if (image[0].alt === image[1].alt) {
    imageContainer[0].classList.replace("selected", "matched");
    imageContainer[1].classList.replace("selected", "matched");
  }

  if (image[0].alt !== image[1].alt) {
    imageContainer[0].classList.remove("selected");
    imageContainer[1].classList.remove("selected");
  }

  // If all images are matched, the we won!
  if (
    document.querySelectorAll(".flip-image-inner.matched").length ===
    document.querySelectorAll(".flip-image-inner").length
  ) {
    stopandReturn();
    buildLayout(endHTML(timeScore));
    let playAgain = document.getElementById("playAgain");
    playAgain.addEventListener("click", newGame);
  }
}

function newGame() {
  buildLayout(galleryHTML());
  startGame();
}

export { startGame, timeScore };
