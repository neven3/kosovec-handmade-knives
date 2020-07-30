const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', (event) => {
    if (scrollY > 20) navbar.classList.add('sticky');
    else navbar.classList.remove('sticky');
});