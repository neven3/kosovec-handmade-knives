const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar-menu');
const menuToggler = document.querySelector('.menu-toggler');
const galleryContent = document.querySelector('.gallery-content');
const goTopButton = document.querySelector('.go-top');

// for screens whose viewport width/height ratio is more than 1.196 and less than 2, the background image will be positioned too high, so this will keep it positioned correctly (stick the bottom of the image to the bottom of the viewport)
if (innerWidth / innerHeight > 1.196 && innerWidth / innerHeight < 2) {
    document.querySelector('#home').style.backgroundPosition = 'bottom';
}

// change navbar style on scroll
window.addEventListener('scroll', () => {
    if (scrollY > 20) {
        navbar.classList.add('sticky');
        goTopButton.style.opacity = 1;
        goTopButton.style.pointerEvents = 'initial';
    } else {
        navbar.classList.remove('sticky');
        goTopButton.style.opacity = 0;
        goTopButton.style.pointerEvents = 'none';
    }
});

// toggle menu on hamburger click
menuToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    menuToggler.classList.toggle('active');
});

// removes the fullscreen navbar when a link has been clicked on
navbarMenu.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
        navbarMenu.classList.toggle('active');
        menuToggler.classList.toggle('active');
    }
});

// add move-to-top functionality to goToTopButton
goTopButton.addEventListener('click', () => scroll(0,0));

// jQuery for Magnific Popup
$('.gallery-content').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
});