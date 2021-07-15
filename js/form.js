import { buildLayout, galleryHTML, formHTML } from "./main.js";
import { startGame } from "./game.js";
/**
 * eventListeners
 */
let userName = "";
let hardMode = false;
document.addEventListener("DOMContentLoaded", function () {
  // Init userForm
  buildLayout(formHTML);

  // Form on submit
  handlerForm();
});

function handlerForm() {
  let userForm = document.querySelector("#user-form");
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    userName = document.querySelector("#uname").value;
    hardMode = document.querySelector("#game-mode").checked;

    if (/^[a-zA-Z]{1,8}$/.test(userName)) {
      // Game start
      buildLayout(galleryHTML());
      startGame(hardMode);
    } else {
      // Show error msg
      alert("¿Enserio te llamas así?");
    }
  });
}

export { userName, hardMode, handlerForm };
