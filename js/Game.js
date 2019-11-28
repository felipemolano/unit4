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
        this.phraseObj = null;
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
        this.phraseObj = new Phrase(this.activePhrase);

    }


    // checkForWin method

    checkForWin()
    {
        let stringNoSpaces = this.phraseObj.phrase.replace(/\s/g,'');
        const stringNoSpacesLength = stringNoSpaces.length;
     
        const ul = document.getElementById("phrase").children[0];
        let counter = 0;
        for(let i = 0; i < ul.children.length; i++){

            if(ul.children[i].classList.contains("show")){
                counter++;
            }
        
        }
      
        console.log(counter);
        console.log(stringNoSpacesLength);
        if(counter == stringNoSpacesLength)
        {
            return true;
        }
        else{
            return false;
        }



    }


    // removeLife method

    removeLife(){

        this.missed += 1;
        
        const miss = document.getElementById("scoreboard").children[0];
        
        for(let i = 0; i < miss.children.length ; i++){

            if(i === miss.children.length - 1){
                miss.children[i].children[0].src = "images/lostHeart.png";
            }
        
        }
        
    }




    // gameOver method

    gameOver(gameWon) {

        return (this.missed > 5);
    }


 }