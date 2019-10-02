/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay() {
     for (let i=0; i<this.phrase.length; i++) {
       if (/[a-zA-z]/.test(this.phrase[i])) {
         const li = document.createElement('li');
         li.textContent = this.phrase[i].toUpperCase();
         li.className = `hide letter ${li.textContent.toLowerCase()}`;
         document.querySelector('ul').appendChild(li);
       } else {
         const li = document.createElement('li');
         li.textContent = this.phrase[i];
         li.className = `hide space`;
         document.querySelector('ul').appendChild(li);
       }
     }
   }

   checkLetter(letter) {
     // const letterInPhrase = document.querySelectorAll('.letter');
     // for (let i=0; i<letterInPhrase.length; i++) {
     //   console.log(letterInPhrase[i])
     //   if (letterInPhrase[i].textContent.toLowerCase() === letter) {
     //     return true;
     //   }
     // }
     // let letter = '';
     // for (letter of letterInPhrase) {
     //   console.log(letter)
     // }
     if (this.phrase.includes(letter)) {
       return true;
     } else {
       return false;
     }
   }

   showMatchedLetter(letter) {
     const letterInPhrase = document.querySelectorAll('.letter');
     let letterIn;

     for (letterIn of letterInPhrase) {
       if (letter === letterIn.textContent.toLowerCase()) {
         letterIn.classList.remove('hide');
         letterIn.classList.add('show');
       }
     }
   }
 }
