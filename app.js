const servicios = [
    { nombre: "Netflix", categoria: "Streaming", imagen: "img/netflix.png" },
    { nombre: "Disney+", categoria: "Streaming", imagen: "img/disney.png" },
    { nombre: "Prime Video 1 y 6 meses", categoria: "Streaming", imagen: "img/primevideo.png" },
    { nombre: "HBO Max", categoria: "Streaming", imagen: "img/hbomax.png" },
    { nombre: "Paramount plus", categoria: "Streaming", imagen: "img/paramount.png" },
    { nombre: "Vix 1, 3, 6 meses", categoria: "Streaming", imagen: "img/vix.png"},
    { nombre: "Apple Tv", categoria: "Streming", imagen: "img/appletv.png" },
    { nombre: "Peacock Tv", categoria: "Streming", imagen: "img/peacock.png" },
    { nombre: "Crunchyroll", categoria: "Anime", imagen: "img/crunchyroll.png" },

    { nombre: "Spotify Premium 1 y 3 meses", categoria: "Música", imagen: "img/spotify.png" },
    { nombre: "YouTube Premium", categoria: "Música", imagen: "img/youtube.png" },
    { nombre: "Dezzer Music", categoria: "Musica", imagen: "img/dezzer.png" },

    { nombre: "ChatGPT Plus", categoria: "IA", imagen: "img/chatgpt.png" },
    { nombre: "Gemini Advanced", categoria: "IA", imagen: "img/gemini.png" },

    { nombre: "Canva Pro", categoria: "Productividad", imagen: "img/canva.png" },
    { nombre: "Notion Pro", categoria: "Productividad", imagen: "img/nation.png" },

    
    
];const contenedor = document.querySelector(".grid");

servicios.forEach((s, index) => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.style.animationDelay = (index * 0.15) + "s";

    card.innerHTML = `
    <img src="${s.imagen}" alt="${s.nombre}" class="card-img">
    <h3>${s.nombre}</h3>
    <p>${s.categoria}</p>
    <a href="https://wa.me/message/D6TWHEGQDN5OB1" target="_blank">
        Solicitar
    </a>
`;
    contenedor.appendChild(card);
});const buscador = document.getElementById("buscador");

buscador.addEventListener("input", function() {
    const filtro = this.value.toLowerCase();
    const tarjetas = document.querySelectorAll(".card");

    tarjetas.forEach(card => {
        const texto = card.innerText.toLowerCase();
        if (texto.includes(filtro)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}