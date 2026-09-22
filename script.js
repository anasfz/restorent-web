// Select the mobile menu button and the navigation bar elements
let menuBtn = document.querySelector('.menu-btn');
let navbar = document.querySelector('#navbar');

// Toggle the 'active' class on the navbar when the menu button is clicked
// This will show or hide the menu on small screens
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
}