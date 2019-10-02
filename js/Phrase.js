/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay() {
     for (let i=0; i<getRandomPhrase().length; i++) {
       console.log(getRandomPhrase()[i]);
     }
   }

   checkLetter() {

   }

   showMatchedLetter() {

   }
 }
