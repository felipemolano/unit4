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
        console.log(this.phrases[randomNumber]);
        return (this.phrases[randomNumber]);

    }


    // startGame method

    startGame(){

        const overlay = document.getElementById("overlay").style.visibility = "hidden";

        this.activePhrase = new Phrase(String(this.getRandomPhrase()));
        this.activePhrase.addPhraseToDisplay();
    }


    // checkForWin method

    checkForWin()
    {
        let stringNoSpaces = this.activePhrase.phrase.replace(/\s/g,'');
        const stringNoSpacesLength = stringNoSpaces.length;
     
        const ul = document.getElementById("phrase").children[0];
        let counter = 0;
        for(let i = 0; i < ul.children.length; i++){

            if(ul.children[i].classList.contains("show")){
                counter++;
            }
        
        }
      
        //console.log(counter);
        //console.log(stringNoSpacesLength);
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

        //this.missed += 1;
        
        const miss = document.getElementById("scoreboard").children[0];
        if(this.missed < 5){
        miss.children[this.missed].children[0].src = "images/lostHeart.png";
        }
      
        this.missed += 1;
        
    }




    // gameOver method

    gameOver(gameWon) {

        const overlay = document.getElementById("overlay");
        const message = document.getElementById("game-over-message");

        // reset the game

        const li = document.querySelectorAll("li.hide");
        const tries = document.querySelectorAll("li.tries");
        const allKeysWrong  = document.querySelectorAll("button.wrong");
        const allKeysChosen = document.querySelectorAll("button.chosen");

        // remove the li elements
        li.forEach(item => {

            item.remove();
        });

        // reset key class

        allKeysWrong.forEach(key => {

            key.classList.remove("wrong");
            key.classList.add("key");
            key.disabled = false;
           
      
        });

        allKeysChosen.forEach(key => {

            key.classList.remove("chosen");
            key.classList.add("key");
            key.disabled = false;
           
      
        });

        // reset life

        this.missed = 0;
        tries.forEach(t =>{
            t.children[0].src = "images/liveHeart.png"
        });


     


        
        // have you won??
        if(gameWon){

            overlay.className = "win"
            overlay.style.visibility = "visible";
            message.innerText = "Good job you did it!!!";


        }
        else
        {
            overlay.className = "lose"
            overlay.style.visibility = "visible";
            message.innerText = "sorry you did not guess it!";

        }
 
    }


    // handleInteraction method

    handleInteraction(button)
    {
        console.log(button);

        // disable the pressed key
           button.disabled = true;
           
        // does the phrase contain that pressed key?
            
            if(this.activePhrase.checkLetter(button.innerText))
            {
                // yes
                button.className = "chosen";
                this.activePhrase.showMatchedLetter(button.innerText);
                if(this.checkForWin())
                {
                    this.gameOver(true);
                }

            }

            else
            {

                // no
                
                button.className = "wrong";
                this.removeLife();

                if(this.missed === 5)
                {
                    this.gameOver(false);
                }
            }

          
    }


 }