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
     if (this.phrase.includes(letter)) {
       return true;
     } else {
       return false;
     }
   }

   showMatchedLetter(letter) {
     const letterInPhrase = document.querySelectorAll('.letter');

     for (let eachLetter of letterInPhrase) {
       if (letter === eachLetter.textContent.toLowerCase()) {
         eachLetter.classList.remove('hide');
         eachLetter.classList.add('show');
       }
     }
   }

 }
