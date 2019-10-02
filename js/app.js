/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const keys = document.querySelectorAll('.key');

function addPhysicalKeyboardListener(event) {
  keys.forEach(key => {
    if (key.textContent === event.key) {
      if (key.classList.contains('wrong')) {
        return false;
      }
      return game.handleInteraction(key);
    }
  });
}


document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
  window.addEventListener('keyup', addPhysicalKeyboardListener, false);
}, false);

keys.forEach(key => key.addEventListener('click', (e) => game.handleInteraction(e.target)), false);
