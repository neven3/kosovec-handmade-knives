const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar-menu');
const menuToggler = document.querySelector('.menu-toggler');

// change navbar style on scroll
window.addEventListener('scroll', () => {
    if (scrollY > 20) navbar.classList.add('sticky');
    else navbar.classList.remove('sticky');
});

// toggle menu on hamburger click
menuToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});