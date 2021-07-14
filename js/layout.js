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