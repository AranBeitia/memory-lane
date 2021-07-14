import { mainContent } from './main.js'

function buildLayout(html) {
  mainContent.innerHTML = html;
}

let formHTML = `
<form id="user-form" class="form-elements">
  <h1 class="form-screen">Choose a user name</h1>
  <label for="name">Username</label>
  <input type="text" id="uname" name="name" maxlength="8" minlength="1" pattern="[a-zA-Z]{1,8}"/>
  <input type="submit" value="Start" />
</form>
`;

let imgUrl = [
  {
    name: 'image-01',
    url: 'assets/image-01.jpg',
  },
  {
    name: 'image-02',
    url: 'assets/image-02.jpg'
  },
  {
    name: 'image-03',
    url: 'assets/image-03.jpg'
  },
  {
    name: 'image-04',
    url: 'assets/image-04.jpg'
  },
  {
    name: 'image-05',
    url: 'assets/image-05.jpg'
  },
  {
    name: 'image-06',
    url: 'assets/image-06.jpg'
  },
  {
    name: 'image-07',
    url: 'assets/image-07.jpg'
  },
  {
    name: 'image-08',
    url: 'assets/image-08.jpg'
  }
]

function galleryHTML() {
  let grid = '';
  let imagesTag = '';

  // Duplicate values from array
  let imagesCopy = [...imgUrl ].concat(imgUrl );

  // Shufflez the index of values from array
  let shuffledArray = imagesCopy.sort(() => Math.random() - 0.5);
  // Iterate trough every value
  shuffledArray.forEach(image => {
      imagesTag += `
      <div class="flip-image">
        <div class="flip-image-inner show">
          <div class="flip-image-front">
          <img src="${image.url}" alt="${image.name}" class="grid-img">
          </div>
          <div class="flip-image-back"></div>
        </div>
      </div>
    `;
  });
  grid = `<section class="grid">${imagesTag}</section>`;
  return grid;
}





let galleryHTML = `
<section class="grid">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
  <img src="https://images.squarespace-cdn.com/content/v1/56a739dbb204d5c253feacd8/1455801509563-EN0CZLQAK6Z6NCIXOP09/img.jpg" alt="">
</section>
`;

export {
  buildLayout,
  formHTML,
  galleryHTML
}