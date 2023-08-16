'use strict';

// TARGETTING THE CHECK BUTTON AND STORING IT IN A VARIABLE TO REUSE IT LATER
const checkBtn = document.querySelector('.check');

// TARGETTING THE CHECK BUTTON AND STORING IT IN A VARIABLE TO REUSE IT LATER
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMesage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (secret) {
  document.querySelector('.number').textContent = secret;
};

const displayScore = function (currentScore) {
  document.querySelector('.score').textContent = currentScore;
};

// REUSING THE CHECK BUTTON HERE THAT WAS TARGETTED TO LISTEN TO CLICK EVENT AND MODIFY CONTENT USING THE addEventListener method
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // WHEN THERE IS NO INPUT
    displayMesage('⚠️ No number!');
  } else if (guess === secretNumber) {
    //WHEN THE PLAYER WINS/ GUESS THE CORRECT ANSWER
    displayMesage('🏆 Correct Number');
    displaySecretNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMesage(
        guess > secretNumber
          ? ' 📈 You guess too high'
          : ' 📉 You guess too low'
      );
      score--;
      displayScore(score);
    } else {
      displayMesage('🥲 You lost!');
      // document.querySelector('.message').textContent = ' 🥲 You lost!';
      displayScore(0);
      // document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMesage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displaySecretNumber('?');
  // document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
