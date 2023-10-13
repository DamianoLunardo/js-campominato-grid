console.log("grid.js");
//L’utente clicca su un bottone che genererà una griglia di gioco quadrata. 
//Ogni cella ha un numero progressivo, da 1 a 100. 
//Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
//Quando l’utente clicca su ogni cella, la cella cliccata 
//si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//creo i riferimento per la griglia e per il bottone play
const gridElement = document.querySelector('.grid');
console.log(gridElement);
const btnPlayElement = document.getElementById('btn-play');
console.log(btnPlayElement);

//creo la griglia di 10 x 10 celle alla pressione del pulsante PLAY
// Aggiungo un event listener al pulsante PLAY
btnPlayElement.addEventListener('click', function(){
    //devo fare si che la griglia si svuota ogni volta che clicco il pulsante PLAY
    gridElement.innerHTML = '';
    //caselle generate dal ciclo for
   for (let i = 0; i < 81; i++) {
       const n = i + 1;
       console.log(n)

    //devo visualizzare le celle ora
   const cellMain = '<div class="cell-81">' + n + '</div>';
   console.log(cellMain);

   gridElement.innerHTML += cellMain;
   }

   //event listener per ogni cella alla pressione del pulsante PLAY 
   const cell = document.querySelectorAll('.cell-81');

   for (let i = 0; i < cell.length; i++) {
       cell[i].addEventListener('click', function(){
           cell[i].style.backgroundColor = 'aqua';
           console.log(cell[i]);
       });
   }
});



