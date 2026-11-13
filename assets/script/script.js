// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.


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

// --- 3. VALIDAZIONE FORM NELLA MODALE ---

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