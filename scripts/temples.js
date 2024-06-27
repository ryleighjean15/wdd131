// function toggleMenu() {
//     const nav = document.querySelector('nav ul');
//     nav.classList.toggle('show');
//     const hamburger = document.querySelector('.hamburger');
//     hamburger.classList.toggle('open');
//     if (nav.classList.contains('show')) {
//         hamburger.innerHTML = '<div>X</div>';
//     } else {
//         hamburger.innerHTML = '<div></div><div></div><div></div>';
//     }
// }

// // Set the current year in the footer
// document.getElementById('year').textContent = new Date().getFullYear();

// // Set the last modified date in the footer
// document.getElementById('lastModified').textContent = document.lastModified;

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});
