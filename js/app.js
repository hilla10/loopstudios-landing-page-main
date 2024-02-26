const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.col-right');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
})