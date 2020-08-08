const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar-menu');
const menuToggler = document.querySelector('.menu-toggler');
const galleryContent = document.querySelector('.gallery-content');
const goTopButton = document.querySelector('.go-top');

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