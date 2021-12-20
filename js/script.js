// creo una funzione per la creazione di nuovi box
function createNewBox(doveLoCreo) {
  const newBox = document.createElement("div");
  newBox.className = "box";
  doveLoCreo.append(newBox);
  // al click del box, quello specifico box (this)
  // si colorerà di blu attraverso l'aggiunta di una nuova classe
  newBox.addEventListener("click", function () {
    this.classList.add("blue");
  });
}

// creo il collegamento col DOM con button e container
const buttonFirst = document.querySelector(".livello-primo");
const buttonSecond = document.querySelector(".livello-secondo");
const buttonThird = document.querySelector(".livello-terzo");
const containerHtml = document.querySelector(".container");

// al click del button associo un ciclo for che al suo interno
// va a richiamare la funzione per la creazione di nuovi box.
buttonFirst.addEventListener("click", function () {
  // prima resetto tutto
  // poi aggiungo una classe a container con cui determino
  // una grandezza particolare per l'insieme dei blocchi
  // infine apro un ciclo for che mi crea tanti box quanti ne sono indicati nel ciclo stesso
  containerHtml.innerHTML = "";
  containerHtml.classList.add("easy-mode");
  containerHtml.classList.remove("medium-mode");
  containerHtml.classList.remove("hard-mode");

  for (i = 1; i < 101; i++) {
    createNewBox(containerHtml);
  }
});

buttonSecond.addEventListener("click", function () {
  containerHtml.innerHTML = "";
  containerHtml.classList.remove("easy-mode");
  containerHtml.classList.add("medium-mode");
  containerHtml.classList.remove("hard-mode");
  for (i = 0; i < 81; i++) {
    createNewBox(containerHtml);
  }
});

buttonThird.addEventListener("click", function () {
  containerHtml.innerHTML = "";
  containerHtml.classList.remove("easy-mode");
  containerHtml.classList.remove("medium-mode");
  containerHtml.classList.add("hard-mode");
  for (i = 0; i < 49; i++) {
    createNewBox(containerHtml);
  }
});

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.

function generaRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const listaNumArray = [];

// esegui le istruzioni fino a quando la condizione non è verificata
// quindi, fino a quando non avremo in listaNumArray 16 numeri
while (listaNumArray.length < 16) {
  // genera attraverso la funzione precedente 16 numeri
  const numRandom = generaRandom(1, 16);
  // inserisci il numero in listaNumArray se e soltanto se
  // il numero generato non è già presente/incluso sempre in listaNumArray
  if (!listaNumArray.includes(numRandom)) {
    listaNumArray.push(numRandom);
  }
}

/*
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - 
abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro
 e l’utente può continuare a cliccare sulle altre celle.
 */
