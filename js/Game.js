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
     document.getElementById('overlay').style.display = 'none';
     this.activePhrase = new Phrase(this.getRandomPhrase());
     this.activePhrase.addPhraseToDisplay();
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
     // console.log('hello');
   }

   removeLife() {
     const li = document.createElement('li');
     const img = document.createElement('img');
     li.className = 'tries';
     this.setAttributes(img, {'src': 'images/lostHeart.png', 'alt': 'Heart Icon',
                         'height': '35', 'width' :'30'})
     li.appendChild(img);
     document.querySelector('ol')
       .removeChild(document.querySelector('ol').lastElementChild);
     document.querySelector('ol')
       .insertBefore(li, document.querySelector('ol').childNodes[0]);
     this.missed += 1;
     if (this.missed === 5) {
       this.gameOver(false);
     }
   }

   checkForWin() {
     if (document.querySelectorAll('.letter').length
         === document.querySelectorAll('.show').length) {
       return true;
     } else {
       return false;
     }
   }

   gameOver(bool) {
     document.getElementById('overlay').removeAttribute('style');
     if (bool === false) {
       document.getElementById('overlay').className = 'lose';
       document.getElementById('game-over-message').textContent =
         'Oops! you ran out of lives. Better luck next time';
     } else {
       document.getElementById('overlay').className = 'win';
       document.getElementById('game-over-message').textContent =
         'You WON!!!';
     }
   }

   // Helpers //
   setAttributes(element, attributes) {
     for (let key in attributes) {
       element.setAttribute(key, attributes[key]);
     }
   }
 }
