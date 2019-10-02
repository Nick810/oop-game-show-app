/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

   startGame() {

   }

   createPhrases() {
     const phrases = ['Hit the sack', 'Lose your touch', 'Sit tight',
                      'Pitch in', 'Go cold turkey', 'Ring a bell',
                      'Break Even', 'Keep your chin up', 'Rule of Thumb',
                      'A piece of cake'];
     return phrases;
   }

   getRandomPhrase() {
     return this.phrases[Math.floor(Math.random() * 9)];
   }

   handleInteraction() {
     console.log('hello');
   }

   removeLife() {

   }

   checkForWin() {

   }

   gameOver() {

   }
 }
