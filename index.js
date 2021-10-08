// // getting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");

let currentScore, activePlayer, scores, playing;

function reset() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  diceEl.classList.add("hidden");

  player0El.classList.remove("player--active");
  player1El.classList.add("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
}
reset();

const switchPlayer = function () {
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");

  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
};

// Dice Roll Button
btnRoll.addEventListener("click", function () {
  if (playing) {
    let random = Math.floor(Math.random() * (7 - 1) + 1);
    diceEl.classList.remove("hidden");
    diceEl.src = "dice-" + random + ".png";
    if (random != 1) {
      currentScore = currentScore + random;
      document.getElementById("current--" + activePlayer).textContent =
        currentScore;
      // current0El.innerText = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold Button
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById("score--" + activePlayer).textContent =
      scores[activePlayer];
    // score0El.textContent = scores;

    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      switchPlayer();
    }
  }
});

// New Game Button
btnNew.addEventListener("click", function () {
  reset();
});
