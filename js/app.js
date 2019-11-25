/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



 
 //phrase.addPhraseToDisplay();
 //const game = new Game();
 //game.startGame();
 //console.log(`Active phrase : ${game.activePhrase}`)
 //console.log(game.getRandomPhrase().addPhraseToDisplay());
 //console.log(phrase.phrase);



 // variables


 let game;
 const button = document.getElementById("btn__reset");


 // button event listener

 button.addEventListener("click", function(){

    game = new Game();
    game.startGame();


 });

