const servicios = [
    { nombre: "Netflix", categoria: "Streaming", imagen: "img/netflix.png", estado: "agotado" },
    { nombre: "Disney+", categoria: "Streaming", imagen: "img/disney.png", estado: "agotado" },
    { nombre: "Prime Video 1 mes", categoria: "Streaming", imagen: "img/primevideo.png", estado: "disponible" },
    { nombre: "Prime Video 3 meses", categoria: "Streaming", imagen: "img/primevideo.png", estado: "disponible" },
    { nombre: "Prime Video 6 meses", categoria: "Streaming", imagen: "img/primevideo.png", estado: "disponible" },
    { nombre: "HBO Max", categoria: "Streaming", imagen: "img/hbomax.png", estado: "disponible" },
    { nombre: "Paramount Plus", categoria: "Streaming", imagen: "img/paramount.png", estado: "disponible" },
    { nombre: "Vix 1 mes", categoria: "Streaming", imagen: "img/vix.png", estado: "disponible" },
    { nombre: "Vix 3 meses", categoria: "Streaming", imagen: "img/vix.png", estado: "disponible" },
    { nombre: "Vix 1 año", categoria: "Streaming", imagen: "img/vix.png", estado: "disponible" },
    { nombre: "Universal+", categoria: "Streaming", imagen: "img/universal.png", estado: "agotado" },
    { nombre: "Apple TV", categoria: "Streaming", imagen: "img/appletv.png", estado: "disponible" },
    { nombre: "Peacock TV", categoria: "Streaming", imagen: "img/peacock.png", estado: "disponible" },
    { nombre: "Crunchyroll", categoria: "Anime", imagen: "img/crunchyroll.png", estado: "disponible" },

    { nombre: "Spotify Premium 3 meses", categoria: "Música", imagen: "img/spotify.png", estado: "disponible" },
    { nombre: "YouTube Premium", categoria: "Música", imagen: "img/youtube.png", estado: "disponible" },
    { nombre: "Deezer Music", categoria: "Música", imagen: "img/dezzer.png", estado: "disponible" },

    { nombre: "ChatGPT Plus", categoria: "IA", imagen: "img/chatgpt.png", estado: "agotado" },
    { nombre: "Gemini Advanced", categoria: "IA", imagen: "img/gemini.png", estado: "disponible" },

    { nombre: "Canva Pro", categoria: "Productividad", imagen: "img/canva.png", estado: "disponible" },
    { nombre: "Receta IMSS", categoria: "Productividad", imagen: "img/imss.png", estado: "agotado" }
];

const contenedor = document.querySelector(".grid");

servicios.forEach((s, index) => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.style.animationDelay = (index * 0.15) + "s";

 
    let estadoHTML = "";
    let botonHTML = "";

if (s.estado === "disponible") {

    estadoHTML = "";
    const mensaje = encodeURIComponent(
`Hola 👋, vengo desde la página de QuickFix.

Me interesa el servicio:

📌 ${s.nombre}

¿Podrían darme más información? Muchas gracias.`
);

botonHTML = `<a href="https://wa.me/522229218420?text=${mensaje}" target="_blank">Solicitar</a>`;;

} else {

    estadoHTML = `<div class="cinta-agotado">AGOTADO</div>`;
    botonHTML = `<button class="btn-agotado" disabled>No disponible</button>`;

}

    
    card.innerHTML = `
        <img src="${s.imagen}" alt="${s.nombre}" class="card-img">
        <h3>${s.nombre}</h3>
        <p>${s.categoria}</p>
        ${estadoHTML}
        ${botonHTML}
    `;

    contenedor.appendChild(card);
});

const buscador = document.getElementById("buscador");

buscador.addEventListener("input", function () {
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
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
