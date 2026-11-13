// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.


// Arrey PROGETTI
const lavoriData = [
    { title: "Casa al Lago", category: "Residenziale", year: "2025", placeholder: "400 x 250" },
    { title: "Villa Minimal", category: "Architettura", year: "2025", placeholder: "400 x 250" },
    { title: "Loft Industriale", category: "Interior", year: "2024", placeholder: "400 x 250" },
    { title: "Palazzo Storico", category: "Ristrutturazione", year: "2024", placeholder: "400 x 250" },
    { title: "Headquarters Tech", category: "Commerciale", year: "2025", placeholder: "400 x 250" },
    { title: "Penthouse Vista", category: "Residenziale", year: "2023", placeholder: "400 x 250" }
];

//toggle tema
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Cambia l'icona in base al tema attivo
    if (document.body.classList.contains("dark")) {
        themeToggleBtn.textContent = "☀️";
    } else {
        themeToggleBtn.textContent = "🌙";
    }
});

// VALIDAZIONE FORM NELLA MODALE 

const contactForm = document.getElementById("contact-form");
const userEmail = document.getElementById("user-email");
const userMessage = document.getElementById("user-message");
const formFeedback = document.getElementById("form-feedback");

// Intercetto l'invio del form
contactForm.addEventListener("submit", (event) => {
    // Blocco l'invio automatico della pagina
    event.preventDefault();

    const emailValue = userEmail.value.trim();
    const messageValue = userMessage.value.trim();

    // Controllo se l'email contiene '@' e se il messaggio ha almeno 20 caratteri
    const isEmailValid = emailValue.includes("@");
    const isMessageValid = messageValue.length >= 20;

    // Mostro il div dei messaggi
    formFeedback.classList.remove("d-none", "alert-danger", "alert-success");

    if (!isEmailValid || !isMessageValid) {
        // Se i dati sono sbagliati -> Messaggio Rosso
        formFeedback.classList.add("alert-danger");
        formFeedback.textContent = "La preghiamo di reinserire i dati. L'email deve contenere '@' e il messaggio almeno 20 caratteri.";
    } else {
        // Se è tutto ok -> Messaggio Verde
        formFeedback.classList.add("alert-success");
        formFeedback.textContent = "Richiesta inviata con successo! Ti contatteremo entro 48 ore.";

        // Svuoto i campi del form
        contactForm.reset();
    }
});

// --- CREAZIONE DINAMICA CAROSELLO LAVORI BOOTSTRAP ---

// Prendo il contenitore interno del carosello
const lavoriCarouselInner = document.getElementById("lavoriCarouselInner");

// Divido l'array in gruppi da 3 card ciascuno
for (let i = 0; i < lavoriData.length; i += 3) {

    // Creo la singola slide del carosello
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${i === 0 ? "active" : ""}`;

    // Creo la riga di Bootstrap
    const row = document.createElement("div");
    row.className = "row g-4 justify-content-center";

    // Prendo il gruppetto di 3 lavori corrente
    const gruppoLavori = lavoriData.slice(i, i + 3);

    gruppoLavori.forEach((lavoro, index) => {
        // Creo la colonna (su mobile ne mostra una sola, da tablet tre)
        const col = document.createElement("div");
        col.className = `col-12 col-md-4 ${index > 0 ? "d-none d-md-block" : ""}`;

        // Creo la card
        const card = document.createElement("div");
        card.className = "card h-100 border-0 shadow-sm";

        // Creo il box grigio segnaposto al centro
        const placeholder = document.createElement("div");
        placeholder.className = "card-img-top card-img-placeholder bg-secondary text-white d-flex align-items-center justify-content-center fw-semibold";
        placeholder.style.height = "220px";
        placeholder.textContent = lavoro.placeholder;

        // Creo il corpo della card
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        // Badge con categoria e anno
        const badge = document.createElement("span");
        badge.className = "badge bg-secondary mb-2";
        badge.textContent = `${lavoro.category} • ${lavoro.year}`;

        // Titolo del lavoro
        const title = document.createElement("h5");
        title.className = "card-title fw-bold mb-0";
        title.textContent = lavoro.title;

        // Assemblo tutti i pezzi dentro la card
        cardBody.appendChild(badge);
        cardBody.appendChild(title);

        card.appendChild(placeholder);
        card.appendChild(cardBody);
        col.appendChild(card);

        row.appendChild(col);
    });

    // Metto la riga dentro la slide e la slide dentro il carosello
    carouselItem.appendChild(row);
    lavoriCarouselInner.appendChild(carouselItem);
}