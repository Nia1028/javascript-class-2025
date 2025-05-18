let dealersSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck;

const dealerScore = document.getElementById("dealer-sum");
const playerScore = document.getElementById("players-sum");
const whoWon = document.getElementById("results");
const hitButton = document.getElementById("hit");

let canHit = true;

window.onload = function () {
  buildDeck(7);
  shuffleDeck();
  startGame();
};

const buildDeck = (numOfDecks) => {
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let suits = ["C", "D", "H", "S"];
  deck = [];

  for (let k = 0; k < numOfDecks; k++) {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        deck.push(values[j] + "-" + suits[i]); //A-C,2-C,
      }
    }
  }

  console.log(deck);
};

const shuffleDeck = () => {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length); // this is gonna print a random number btw 0 and 51.99999999
    // deck[0] <---> deck[43]; is K-C, deck[43] is 10-H
    // deck[1] <---> deck [14];
    //deck [j] <---> deck[j];

    let temp = deck[i]; // if deck[i] is K-C, now temp is K-C
    deck[i] = deck[j]; // now deck[i] is 10-H, deck[j] is 10-H, temp is K-C
    deck[j] = temp; // now deck[i] is 10-H, deck[j] is K-C
  }
  console.log(deck);
};

const resetGame = () => {
  clearDealtCards("dealer-cards");
  clearDealtCards("players-cards");
  playerAceCount = 0;
  playerSum = 0;
  dealerAceCount = 0;
  dealersSum = 0;
  canHit = true;
  hidden = "";
  dealerScore.innerText = "";
  playerScore.innerText = "";
  whoWon.innerText = "";
  hitButton.classList.remove("noHit");
  if (deck.length < 75) {
    deck = [];
    buildDeck(7);
    shuffleDeck();
  }
  console.log(deck);
};

function startGame() {
  hidden = deck.pop();
  dealersSum += getValue(hidden);
  dealerAceCount += checkAce(hidden);
  console.log(hidden);
  console.log(dealersSum);
  while (dealersSum < 17) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    dealersSum += getValue(card);
    dealerAceCount += checkAce(card);
    document.getElementById("dealer-cards").append(cardImg);
  }
  console.log(`Dealers Sum - ${dealersSum}`);

  for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    playerSum += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById("player-cards").append(cardImg);
  }
  console.log(`Players sum - ${playerSum}`);
  document.getElementById("hit").addEventListener("click", hit);
  document.getElementById("stay").addEventListener("click", stay);
}

function hit() {
  if (!canHit) {
    return;
  }
  let cardImg = document.createElement("img");
  let card = deck.pop();
  cardImg.src = "./cards/" + card + ".png";
  playerSum += getValue(card);
  playerAceCount += checkAce(card);
  document.getElementById("player-cards").append(cardImg);

  if (reduceAce(playerSum, playerAceCount) > 21) {
    canHit = false;
  }
}

function stay() {
  dealersSum = reduceAce(dealersSum, dealerAceCount);
  playerSum = reduceAce(playerSum, playerAceCount);

  canHit = false;
  document.getElementById("hidden").src = "./cards/" + hidden + ".png";

  let message = "";
  if (playerSum > 21) {
    message = "You lose!";
  } else if (dealersSum > 21) {
    message = "You Win!";
  } else if (playerSum == dealersSum) {
    message = "Tie!";
  } else if (playerSum > dealersSum) {
    message = "You Win!";
  } else if (playerSum < dealersSum) {
    message = " You lose!";
  }

  document.getElementById("dealer-sum").innerText = dealersSum;
  document.getElementById("player-sum").innerText = playerSum;
  document.getElementById("results").innerText = message;
}

function getValue(card) {
  let data = card.split("-"); // 6-s,a-c,j-d,2-h    data = [6, s]
  let value = data[0];
  if (isNaN(value)) {
    if (value == "A") {
      return 11;
    }
    return 10;
  }
  return parseInt(value);
}
function checkAce(card) {
  if (card[0] == "A") {
    return 1;
  }
  return 0;
}
function reduceAce(sum, aceCount) {
  while (sum > 21 && aceCount > 0) {
    sum -= 10;
    aceCount -= 1;
  }
  return sum;
}

// it wil clear all the cards //

const clearDealtCards = (cardsOnTable) => {
  document.getElementById(cardsOnTable).innerHTML = "";
  console.log("cards were cleared");
};
