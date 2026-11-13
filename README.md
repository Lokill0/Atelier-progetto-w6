# Atelier - Studio di Architettura

Un sito web moderno, pulito e responsive sviluppato per uno studio di architettura. Il progetto unisce una cura particolare per il design (ispirato a una palette di toni caldi) all'attenzione per le buone pratiche di sviluppo web, la sicurezza del codice e la compatibilità mobile-first.

---

## 🛠️ Tecnologie e Documentazione Utilizzate
Per realizzare questo progetto ho fatto riferimento alle documentazioni ufficiali delle seguenti tecnologie:
* **HTML5 & Bootstrap 5:** Per la struttura delle pagine e l'utilizzo di componenti nativi pronti all'uso (come la griglia responsive, la navbar, le card e il carosello), consultando la [documentazione ufficiale di Bootstrap](https://getbootstrap.com).
* **SCSS (Sass):** Per organizzare i fogli di stile in modo modulare, definire variabili centralizzate (basate sulla palette cromatica assegnata) e gestire il tema scuro/chiaro. Ho fatto riferimento alla [guida ufficiale di Sass](https://sass-lang.com).
* **JavaScript (Vanilla):** Per la logica di interazione e la generazione dinamica dei contenuti, seguendo le buone pratiche di sicurezza (manipolazione sicura del DOM tramite `createElement` e `textContent`, evitando l'uso di `innerHTML`).

---

## 🏗️ Come è strutturato il progetto

### 1. Sezioni in Hard Coding (HTML)
La struttura principale del sito è definita direttamente in HTML con un approccio *mobile-first*:
* **Navbar:** Barra di navigazione fissa e pulita.
* **Hero Section:** La sezione di presentazione iniziale, stilizzata con il colore di sfondo principale della palette.
* **Sezione Servizi:** Griglia fissa che presenta i servizi offerti dallo studio.
* **Sezione Contatti / Modale:** Moduli e sezioni dedicati alla comunicazione con i clienti.
* **Footer:** Un footer edge-to-edge (a tutto schermo) che si adatta dinamicamente sia al tema chiaro che al tema scuro.

### 2. Generazione Dinamica con Array in JavaScript
Per la sezione **"I nostri lavori" (Portfolio)** ho utilizzato un approccio dinamico:
* Ho creato un **array di oggetti in JavaScript** contenente i dati dei vari progetti (titolo, categoria, anno e segnaposto dell'immagine).
* Tramite un ciclo e metodi nativi come `createElement` e `appendChild`, il codice genera automaticamente le card e le inserisce nel carosello, mantenendo il codice HTML pulito e facilmente aggiornabile.

---

## ✨ Funzionalità Extra Implementate

Oltre ai requisiti di base, ho aggiunto due funzionalità chiave per migliorare l'esperienza utente:

1. **Tema Chiaro / Tema Scuro (Light/Dark Mode):** 
   Un sistema che permette di passare da una modalità chiara a una scura. I colori del testo, degli sfondi (compreso il footer e le card) e dei componenti si adattano fluidamente per garantire sempre il perfetto contrasto e leggibilità.

2. **Carosello Portfolio Responsive:** 
   Un carosello basato sui componenti di Bootstrap ma ottimizzato per mostrare:
   * **1 sola card alla volta** su schermi mobile (smartphone).
   * **3 card affiancate** da tablet e desktop in poi, sfruttando le classi di Bootstrap (`d-none d-md-block`).
   * Il carosello è impostato in modo statico (`data-bs-interval="false"`), quindi non parte da solo ma si muove esclusivamente su comando dell'utente (tramite frecce o tocco/swipe su mobile).
