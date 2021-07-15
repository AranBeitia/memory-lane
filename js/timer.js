import { userName } from "./form.js";
import { updateRanking } from "./ranking.js";

let m = 0;
let s = 0;
let interval = "";
let mAux = "";
let sAux = "";
let timeScore = "";

function startCounter() {
  counting();
  interval = setInterval(counting, 1000);
}

function counting() {
  s++;
  if (s > 59) {
    m++;
    s = 0;
  }
  if (s < 10) {
    sAux = "0" + s;
  } else {
    sAux = s;
  }
  if (m < 10) {
    mAux = "0" + m;
  } else {
    mAux = m;
  }

  timeScore = mAux + ":" + sAux;

  document.querySelector('#current-time-score').innerHTML = timeScore; 
}

function stopandReturn() {
  clearInterval(interval);
  m = 0;
  s = 0;
}

export { startCounter, stopandReturn, timeScore, counting };
