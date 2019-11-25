/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 // class declaration

 class Game {

    
    // constructor
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        
    }


    // createPhrases method
    createPhrases(){

        const phrasesArray = [
                              "life is peachy", 
                              "never forget to remember",
                              "God is the truth",
                              "home sweet home",
                              "time worths gold"
                            ];

        return phrasesArray;

    }

    // getRandomPhrase method

    getRandomPhrase ()
    {


        const randomNumber = (Math.ceil(Math.random()*4));
        return (this.phrases[randomNumber]);

    }


    // startGame method

    startGame(){

        const overlay = document.getElementById("overlay").style.visibility = "hidden";
       
        
        this.activePhrase = this.getRandomPhrase();
        const phraseObj = new Phrase(this.activePhrase);
        phraseObj.addPhraseToDisplay();

    }




 }