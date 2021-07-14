import { buildLayout } from './main.js'

function startGame() {
  setTimeout(hideAllImages, 3000)

  let counter = 0

  document.querySelector('.grid').addEventListener('click', function (e) {
    let item = e.target.parentElement
    console.log(item);
    if(item.classList.contains('flip-image-inner')) {
      counter ++

      if(document.querySelectorAll('.selected').length < 2) {
        item.classList.add('selected')
      }

      if(counter === 2) {
        setTimeout(validateCards, 750)
        counter = 0
      }
    }
  })
}

function hideAllImages() {
  document.querySelectorAll('.flip-image-inner').forEach(elm => {
      elm.classList.remove('show');
  });
}

function validateCards () {
  let imageContainer = document.querySelectorAll('.selected')
  let image = document.querySelectorAll('.selected img')

  if(image[0].alt === image[1].alt) {
    imageContainer[0].classList.replace('selected', 'matched')
    imageContainer[1].classList.replace('selected', 'matched')
  } else if (image[0].alt !== image[1].alt) {
    imageContainer[0].classList.remove('selected')
    imageContainer[1].classList.remove('selected')
  }
}

export {
  startGame
}
