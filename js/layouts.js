import {images} from './gallery.js';
import {mainContent} from './main.js';
/**
 * Form user
 */
let formHTML = `
<form id="user-form" class="form-elements">
    <h1 class="form-screen">Choose a user name</h1>
    <label for="name">Username</label>
    <input type="text" id="uname" name="name" maxlength="8" minlength="1" pattern="[a-zA-Z]{1,8}"/>
    <input type="submit" value="Start" />
</form>
`;

/**
 * Gallery
 */
function galleryHTML() {
    let grid = '';
    let imagesTag = '';

    // Duplicate values from array
    let imagesCopy = [...images].concat(images);

    // Shufflez the index of values from array
    let shuffledArray = imagesCopy.sort(() => Math.random() - 0.5);
    
    // Iterate trough every value
    shuffledArray.forEach(url => {
        imagesTag += `
            <div class="flip-image">
                <div class="flip-image-inner show">
                <div class="flip-image-front">
                    <img src="${url}" alt="" class="grid-img">
                </div>
                <div class="flip-image-back"></div>
                </div>
            </div>
        `;
    });


    grid = `<section class="grid">${imagesTag}</section>`;

    return grid;
}

/**
 * To build Layout
 */
function buildLayout(html) {
    mainContent.innerHTML = html;
}

export {
    formHTML,
    galleryHTML,
    buildLayout
}