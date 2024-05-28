document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        console.log("asdw");
        navLinks.classList.toggle('show');
    });
});

