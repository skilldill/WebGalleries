const animatedGalleryImages = [
    'mountains_1.png',
    'mountains_2.png',
    'mountains_3.png',
    'mountains_4.png',
    'mountains_5.png',
];

const galleryWidth = 700;

const animatedGalleryView = document.getElementById('animated-gallery-view');
const animatedGalleryPrevBtn = document.getElementById('animated-gallery-prev');
const animatedGalleryNextBtn = document.getElementById('animated-gallery-next');

let currentImageIndex = 0;

function buildAnimatedGallery() {
    animatedGalleryImages.forEach(function(image) {
        animatedGalleryView.innerHTML += `
        <img src="${image}" alt="горы" width="700">
        `
    });
}

buildAnimatedGallery();

function animatedGalleryShowNext() {
    if (currentImageIndex === animatedGalleryImages.length - 1) {
        currentImageIndex = 0;
    } else {
        currentImageIndex += 1;
    }

    animatedGalleryView.style.transform = `translateX(-${galleryWidth * currentImageIndex}px)`;
}

function animatedGalleryShowPrev() {
    if (currentImageIndex === 0) {
        currentImageIndex = animatedGalleryImages.length - 1;
    } else {
        currentImageIndex -= 1;
    }

    animatedGalleryView.style.transform = `translateX(-${galleryWidth * currentImageIndex}px)`;
}

animatedGalleryPrevBtn.addEventListener('click', animatedGalleryShowPrev);
animatedGalleryNextBtn.addEventListener('click', animatedGalleryShowNext);
