/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const keys = document.querySelectorAll('.key');
let gameStart = false;

function enterOrSpaceToStart(event) {
  if (event.code === 'Enter' || event.code === 'Space') {
    if (!gameStart) {
      gameStart = !gameStart;
      return game.startGame();
    }
  }
}


document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
}, false);

window.addEventListener('keyup', enterOrSpaceToStart, false);

keys.forEach(key => key.addEventListener('click', (e) => game.handleInteraction(e.target)), false);
