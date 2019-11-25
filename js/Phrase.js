/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // class declaration

 class Phrase {

        // constructor
        constructor (phrase)
        {
            this.phrase =  phrase.toLowerCase();
            

        }


        // addPhraseToDisplay method

        addPhraseToDisplay(){

            let myPhrase = this.phrase;
            
            const ul = document.getElementById("phrase").children[0];

            myPhrase.split("").forEach(letter => {
            let li = document.createElement("LI");
            li.innerText = letter;
            if(letter === " "){
                li.classList.add("hide");
                li.classList.add("space");
            
            }
            else{
                li.classList.add("hide");
                li.classList.add("letter");
                li.className += " " + letter;
            }
            
            ul.appendChild(li);
                
            });

        }




 }