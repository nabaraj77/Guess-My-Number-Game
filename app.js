'use strict';
console.log(document.querySelector('.message').textContent);

//gaming
//Actual code
//Generating Random Number
let score = 20;
let ranNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.guess-no-shower').textContent = ranNumber;
  console.log(ranNumber);
  const userNumber = Number(document.querySelector('.guess-no').value);
  console.log(userNumber);
  if (!userNumber) {
    document.querySelector('.guess-message').textContent = 'Enter a no.';
  } else if (ranNumber === userNumber) {
    document.querySelector('.guess-message').textContent = 'Correct Answer...';
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
