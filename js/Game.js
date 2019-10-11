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
     window.addEventListener('keyup', this.addPhysicalKeyboardListener, false);
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
     return this.phrases[Math.floor(Math.random() * this.phrases.length)];
   }

   handleInteraction(eventTarget) {
     const letterChecked = this.activePhrase.checkLetter(eventTarget.textContent.toLowerCase());
     eventTarget.style.pointerEvents = 'none';
     if (letterChecked === false) {
       eventTarget.classList.add('wrong');
       return this.removeLife();
     } else {
       eventTarget.classList.add('chosen');
       this.activePhrase.showMatchedLetter(eventTarget.textContent.toLowerCase());
       return this.checkForWin();
     }
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
       return this.gameOver(false);
     }
   }

   checkForWin() {
     if (document.querySelectorAll('.letter').length
         === document.querySelectorAll('.show').length) {
       return this.gameOver(true);
     } else {
       return false;
     }
   }

   gameOver(bool) {
     document.getElementById('overlay').removeAttribute('style');
     if (bool === false) {
       gameStart = !gameStart;
       document.getElementById('overlay').className = 'lose';
       document.getElementById('game-over-message').textContent =
         'Oops! you ran out of lives. Better luck next time';
       document.getElementById('btn__reset').textContent = 'Try Again';
       window.removeEventListener('keyup', this.addPhysicalKeyboardListener, false);
       return game.restartGame();
     } else {
       gameStart = !gameStart;
       document.getElementById('overlay').className = 'win';
       document.getElementById('game-over-message').textContent =
         'You WON!!!';
       document.getElementById('btn__reset').textContent = 'Play Again';
       window.removeEventListener('keyup', this.addPhysicalKeyboardListener, false);
       return game.restartGame();
     }
   }

   restartGame() {
     document.querySelector('ul').innerHTML = '';
     document.querySelector('ol').innerHTML = '';

     for (let element of document.querySelectorAll('.key')) {
       element.removeAttribute('class');
       element.removeAttribute('style');
       element.className = 'key';
     }

     for (let i = 0; i < 5; i++) {
       const li = document.createElement('li');
       const img = document.createElement('img');
       li.className = 'tries';
       this.setAttributes(img, {'src': 'images/liveHeart.png', 'alt': 'Heart Icon',
                           'height': '35', 'width' :'30'})
       li.appendChild(img);
       document.querySelector('ol')
         .insertBefore(li, document.querySelector('ol').childNodes[0]);
     }

     return this.missed = 0;
   }

   // Helpers Methods //
   setAttributes(element, attributes) {
     for (let key in attributes) {
       element.setAttribute(key, attributes[key]);
     }
   }

   addPhysicalKeyboardListener(event) {
     keys.forEach(key => {
       if (key.textContent === event.key) {
         if (key.classList.contains('wrong')) {
           return false;
         }
         return game.handleInteraction(key);
       }
     });
   }
   
 }
