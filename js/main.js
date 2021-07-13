// Nombre ususario actual
// Un array con todos los nombres de usuarios
// Array con imagenes ...
//import * as form from './form.js'

/**
 * Global Vars
 */
var userName = '';
var mainContent = document.querySelector('.main-content');

var formHTML = `<form id="user-form" class="form-elements">
<h1 class="form-screen">Choose a user name</h1>
<label for="name">Username</label>
<input type="text" id="uname" name="name" maxlength="8" minlength="1" pattern="[a-zA-Z]{1,8}"/>
<input type="submit" value="Start" />
</form>
`; 


function initGalleryGame() {
    return `<p>Holaaa desde galería</p>`; 
}

function buildLayout(html) {
    mainContent.innerHTML = html;
}


/**
 * eventListeners
 */
 document.addEventListener("DOMContentLoaded", function() {
     
    var userForm = document.querySelector('#user-form');
    userForm.addEventListener('submit', e => {
        e.preventDefault();
        userName = document.querySelector('#uname').value;
    
        if (/^[a-zA-Z]{1,8}$/.test(userName)) {
            // Game start
            buildLayout(formHTML);
        } else {
            // Show error msg
            alert('¿Enserio te llamas así?');
        }
    });    
});
