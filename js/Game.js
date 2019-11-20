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

        const phrasesArray = [new Phrase("life is peachy"), 
                              new Phrase("never forget to remember"),
                              new Phrase("God is the truth"),
                              new Phrase("home sweet home"),
                              new Phrase("time worths gold")
                            ];

        return phrasesArray;

    }

    // getRandomPhrase method

    getRandomPhrase ()
    {


        const randomNumber = (Math.random() * 2);
        return (this.phrases[randomNumber]);

    }


 }