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


        // checkLetter method


        checkLetter(letter){

            let myPhrase = this.phrase;
            myPhrase.split("").forEach(element => {

                if(element === letter)
                {
                    console.log(myPhrase);
                    console.log("match found for: "+letter);
                }



            });



        }



        // showMatchedLetter method


        showMatchedLetter(letter)
        {
            
            const ul = document.getElementsByClassName("hide");
            for(let i = 0; i < ul.length ; i++)
            {
                if(letter === ul.item(i).innerText){
                   
                    ul.item(i).classList.add("show");
                    //ul.item(i).classList.remove("hide");
                    
                
                }
            }
         
   
        }




 }