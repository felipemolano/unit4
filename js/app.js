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
 const container = document.getElementsByClassName("main-container");

 // button event listener
 console.log(container[0]);

container[0].addEventListener("click", function(event){

    console.log(event.target.type);

     // reset the game


      // remove al li elements from the Phrase ul element
     

        




    if(event.target.type === "submit" && event.target.id === "btn__reset"){

    
     
     

      game = new Game();
      game.startGame();
      
    }
    else if(event.target.type === "submit"){
  

      game.handleInteraction(event.target);
    }
    
   
   



 });

