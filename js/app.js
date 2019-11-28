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
    game.phraseObj.addPhraseToDisplay();
    game.phraseObj.checkLetter("e");
    game.phraseObj.showMatchedLetter("e");
    game.phraseObj.checkLetter("w");
    game.phraseObj.showMatchedLetter("w");
    game.phraseObj.checkLetter("h");
    game.phraseObj.showMatchedLetter("h");
    game.phraseObj.checkLetter("o");
    game.phraseObj.showMatchedLetter("o");
    game.phraseObj.checkLetter("m");
    game.phraseObj.showMatchedLetter("m");
    game.phraseObj.checkLetter("s");
    game.phraseObj.showMatchedLetter("s");
    game.phraseObj.checkLetter("t");
    game.phraseObj.showMatchedLetter("t");
    
    game.removeLife();
    game.removeLife();
    game.removeLife();
    game.removeLife();
    //console.log (game.gameOver("lost"));
    console.log (game.checkForWin());


 });

