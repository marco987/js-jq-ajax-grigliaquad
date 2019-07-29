// Griglia 6x6, ad ogni click parte una richiesta AJAX
// che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato


$(document).ready(function(){

// Salvo in una variabile l'indirizzo API
var numRandom = "https://flynn.boolean.careers/exercises/api/random/int";

$(".quad").click(function(){

  // Memorizzo this in una variabile
  var questo = this;

  // Richiamo il numero radom dall'API
  $.ajax(
     {
        url : numRandom,
        method: "GET",
        success: function(data){
          // Memorizzo in una variabile il numero random
          var numGenerato = data.response;
          // Condizione
          if (numGenerato < 5) {
            // Aggiungo la classe .giallo e stampo il testo
            $(questo).addClass("giallo").text(numGenerato);
          } else {
            // Aggiungo la classe .giallo e stampo il testo
            $(questo).addClass("verde").text(numGenerato);
          }
        },
        error: function(){

        }
     }
  );

});

});
