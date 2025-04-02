let dealersSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck;

let canHit = true;

window.onload = function () {
  buildDeck();
};

function buildDeck() {
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

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + "-" + suits[i]); //A-C,2-C,
    }
  }
  console.log(deck);
}
