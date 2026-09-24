var map = L.map('map').setView([-7.171750, -36.798706], 8);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Array de coordenadas dos campi do IFPB na Paraíba
const campiIFPB = [
  { nome: "IFPB - Campus João Pessoa", lat: -7.1356, lng: -34.8732, cidade: "João Pessoa" },
  { nome: "IFPB - Campus Campina Grande", lat: -7.2185, lng: -35.9150, cidade: "Campina Grande" },
  { nome: "IFPB - Campus Cajazeiras", lat: -6.8906, lng: -38.5492, cidade: "Cajazeiras" },
  { nome: "IFPB - Campus Sousa", lat: -6.7570, lng: -38.2290, cidade: "Sousa" },
  { nome: "IFPB - Campus Patos", lat: -7.0253, lng: -37.2669, cidade: "Patos" },
  { nome: "IFPB - Campus Monteiro", lat: -7.8893, lng: -37.1265, cidade: "Monteiro" },
  { nome: "IFPB - Campus Picuí", lat: -6.5173, lng: -36.3536, cidade: "Picuí" },
  { nome: "IFPB - Campus Princesa Isabel", lat: -7.7348, lng: -37.9890, cidade: "Princesa Isabel" },
  { nome: "IFPB - Campus Guarabira", lat: -6.8642, lng: -35.4800, cidade: "Guarabira" },
  { nome: "IFPB - Campus Cabedelo", lat: -6.9806, lng: -34.8360, cidade: "Cabedelo" },
  { nome: "IFPB - Campus Catolé do Rocha", lat: -6.3478, lng: -37.7511, cidade: "Catolé do Rocha" },
  { nome: "IFPB - Campus Esperança", lat: -7.0267, lng: -35.8569, cidade: "Esperança" },
  { nome: "IFPB - Campus Itabaiana", lat: -7.3323, lng: -35.3340, cidade: "Itabaiana" },
  { nome: "IFPB - Campus Itaporanga", lat: -7.3045, lng: -38.1506, cidade: "Itaporanga" },
  { nome: "IFPB - Campus Mangabeira", lat: -7.1680, lng: -34.8320, cidade: "João Pessoa" },
  { nome: "IFPB - Campus Pedras de Fogo", lat: -7.4024, lng: -35.1165, cidade: "Pedras de Fogo" },
  { nome: "IFPB - Campus Santa Luzia", lat: -6.8672, lng: -36.9238, cidade: "Santa Luzia" },
  { nome: "IFPB - Campus Santa Rita", lat: -7.1139, lng: -34.9781, cidade: "Santa Rita" },
  { nome: "IFPB - Campus Soledade", lat: -7.0592, lng: -36.3622, cidade: "Soledade" },
  { nome: "IFPB - Campus Areia", lat: -6.9631, lng: -35.7001, cidade: "Areia" }
];


// Laço para adicionar cada marcador e popup ao mapa
campiIFPB.forEach(campus => {
  L.marker([campus.lat, campus.lng])
   .addTo(map)
   .bindPopup(`<b>${campus.nome}</b><br>Cidade: ${campus.cidade}`);
});