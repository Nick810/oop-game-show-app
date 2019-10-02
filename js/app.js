/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
// const phrase = new Phrase();
const keys = document.querySelectorAll('.key');

document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
});

keys.forEach(key => key.addEventListener('click', () => game.handleInteraction()));
