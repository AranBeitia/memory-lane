// Nombre ususario actual
// Un array con todos los nombres de usuarios
// Array con imagenes ...
//import * as form from './form.js'

/**
 * Global Vars
 */
let userName = '';
let mainContent = document.querySelector('.main-content');

let formHTML = `<form id="user-form" class="form-elements">
<h1 class="form-screen">Choose a user name</h1>
<label for="name">Username</label>
<input type="text" id="uname" name="name" maxlength="8" minlength="1" pattern="[a-zA-Z]{1,8}"/>
<input type="submit" value="Start" />
</form>
`; 

let galleryHTML = `<p>Im gallery</p>`; 


function buildLayout(html) {
    mainContent.innerHTML = html;
}


/**
 * eventListeners
 */
 document.addEventListener("DOMContentLoaded", function() {
    // Init userForm
    buildLayout(formHTML); 
    
    let userForm = document.querySelector('#user-form');
    userForm.addEventListener('submit', e => {
        e.preventDefault();
        userName = document.querySelector('#uname').value;
    
        if (/^[a-zA-Z]{1,8}$/.test(userName)) {
            // Game start
            buildLayout(galleryHTML);
        } else {
            // Show error msg
            alert('¿Enserio te llamas así?');
        }
    });    
});
