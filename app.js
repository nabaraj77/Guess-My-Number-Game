'use strict';

//gaming
//Actual code
//Generating Random Number
let score = 20;
let highScore = 0;
document.querySelector('.high-score').textContent = highScore;
let ranNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.guess-no-shower').textContent = ranNumber;
document.querySelector('.check').addEventListener('click', function () {
  const userNumber = Number(document.querySelector('.guess-no').value);
  //console.log(userNumber);
  if (!userNumber) {
    document.querySelector('.guess-message').textContent = 'Enter a no.';
  } else if (ranNumber === userNumber) {
    document.querySelector('.guess-no-shower').textContent = ranNumber;
    document.querySelector('.guess-message').textContent = 'Correct Answer...';
    document.querySelector('.wrapper').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.high-score').textContent = highScore;
    }
  } else if (userNumber > ranNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.guess-message').textContent = 'Too High';
      document.querySelector('.score-given').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game Over.';
      document.querySelector('.score-given').textContent = '0';
    }
  } else if (userNumber < ranNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.guess-message').textContent = 'Too Low';

      document.querySelector('.score-given').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game Over.';
      document.querySelector('.score-given').textContent = '0';
    }
  }
});
document.querySelector('.play-again').addEventListener('click', function () {
  score = 20;
  let ranNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score-given').textContent = score;
  document.querySelector('.guess-no-shower').textContent = '?';
  document.querySelector('.guess-message').textContent = 'Start guessing...';
  document.querySelector('.guess-no').textContent = '';
  document.querySelector('.wrapper').style.backgroundColor = '#ff6347';
  document.querySelector('.guess-no').value = '';
});
