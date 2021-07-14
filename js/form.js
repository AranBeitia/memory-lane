import {formHTML, galleryHTML, buildLayout} from './layouts.js';
import {initGameLogic} from './gallery.js';
/**
 * Form Handler
 */
let userName = '';
document.addEventListener("DOMContentLoaded", function() {
    // Init userForm
    buildLayout(formHTML); 
    
    // Form on submit
    let userForm = document.querySelector('#user-form');

    userForm.addEventListener('submit', e => {
        e.preventDefault();
        userName = document.querySelector('#uname').value;
    
        if (/^[a-zA-Z]{1,8}$/.test(userName)) {
            // Game start
            buildLayout(galleryHTML());
            initGameLogic();
        } else {
            // Show error msg
            alert('¿Enserio te llamas así?');
        }
    });    
});

export {
    userName
}
