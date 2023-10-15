const simpleGalleryImages = [
    'mountains_1.png',
    'mountains_2.png',
    'mountains_3.png',
    'mountains_4.png',
    'mountains_5.png',
];

const simpleGalleryView = document.getElementById('simple-gallery-view');
const simpleGalleryPrevBtn = document.getElementById('simple-gallery-prev');
const simpleGalleryNextBtn = document.getElementById('simple-gallery-next');

let currentImageIndex = 0;

function simpleGalleryShowNext() {
    if (currentImageIndex === simpleGalleryImages.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex += 1;
    }

    simpleGalleryView.setAttribute('src', simpleGalleryImages[currentImageIndex]);
}

function simpleGalleryShowPrev() {
    if (currentImageIndex === 0) {
        currentImageIndex = simpleGalleryImages.length - 1;
    } else {
        currentImageIndex -= 1;
    }

    simpleGalleryView.setAttribute('src', simpleGalleryImages[currentImageIndex]);
}

simpleGalleryPrevBtn.addEventListener('click', simpleGalleryShowPrev);
simpleGalleryNextBtn.addEventListener('click', simpleGalleryShowNext);
