document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const map = L.map('map').setView([-28.4578, -62.0861], 13); // Coordenadas exactas de Los Juries

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-28.4578, -62.0861]).addTo(map)
        .bindPopup('Tela Pura Indumentaria - Los Juries')
        .openPopup();
});
