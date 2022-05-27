'use strict';
console.log(document.querySelector('.message').textContent);

//gaming
//Actual code
//Generating Random Number

document.querySelector('.check').addEventListener('click', function () {
  let ranNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess-no-shower').textContent = ranNumber;
  console.log(ranNumber);
  const userNumber = Number(document.querySelector('.guess-no').value);
  console.log(userNumber);
  if (ranNumber === userNumber) {
    document.querySelector('.guess-message').textContent = 'Correct Guess...';
  }
});
