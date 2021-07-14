/**
 * 
 */
let images = [
    'https://images.pexels.com/photos/8502325/pexels-photo-8502325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/8567608/pexels-photo-8567608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/7556106/pexels-photo-7556106.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/8602140/pexels-photo-8602140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/8402538/pexels-photo-8402538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5810906/pexels-photo-5810906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/971360/pexels-photo-971360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5771604/pexels-photo-5771604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];

function initGameLogic() {
    
    setTimeout(hideAllImages, 3000);

    let visibleCards = 0;
    document.querySelector('.grid').addEventListener('click', e => {

        let elm = e.target.parentElement;

        // Validate if target click is the correct elm 
        if (elm.classList.contains('flip-image-inner')) {
            
            visibleCards++

            // selected elms are not more than 2, starting from 0 lenght
            if ( document.querySelectorAll('.flip-image-inner.selected').length < 2 ) {
                elm.classList.add('selected');
            }
            
            
            // Every two clicks
            if (visibleCards == 2 ) {
                setTimeout(validateImages, 750);
                visibleCards = 0;
            }
        }
    });
}

function hideAllImages() {
    document.querySelectorAll('.flip-image-inner').forEach(elm => {
        elm.classList.remove('show');
    });
}

function validateImages() {

    let imagesParent = document.querySelectorAll('.flip-image-inner.selected');
    let imagesChild = document.querySelectorAll('.flip-image-inner.selected img'); 

    // Comparing the 2 images
    if (imagesChild[0].src === imagesChild[1].src) {

        imagesParent.forEach(elm => {
            elm.classList.replace('selected','matched');
        })

    } else {
        imagesParent.forEach(elm => elm.classList.remove('selected'))
    }

    // If all images are matched, the we won!
    if (document.querySelectorAll('.flip-image-inner.matched').length === document.querySelectorAll('.flip-image-inner').length) {
        alert('Has ganado!');
        loadWinPage();
    }
}

export {
    images,
    initGameLogic
}