// Coordenadas fixas
const lat = -17.629596;   //Latitude
const lon = -44.610968;   //Longitude

// Cria o mapa centralizado
const map = L.map('map').setView([lat, lon], 15);

// Camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marcador com popup
L.marker([lat, lon]).addTo(map)
  .bindPopup('📍 Studio Mocotattoo - Aqui é a arte!')
  .openPopup();