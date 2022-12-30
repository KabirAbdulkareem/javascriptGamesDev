const cardArray = [
  {
    name: "fries",
    image: "images/fries.png",
  },
  {
    name: "cheeseburger",
    image: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    image: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    image: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    image: "images/milkshake.png",
  },
  {
    name: "pizza",
    image: "images/pizza.png",
  },
  {
    name: "fries",
    image: "images/fries.png",
  },
  {
    name: "cheeseburger",
    image: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    image: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    image: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    image: "images/milkshake.png",
  },
  {
    name: "pizza",
    image: "images/pizza.png",
  },
];

cardArray.sort(function () {
  return 0.5 - Math.random();
});

const gridDisplay = document.querySelector("#grid");
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.setAttribute("class", "card");
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");

  if (cardChosen[0] == cardChosen[1]) {
    alert("You found a match!");
    cards[cardChosenIds[0]].setAttribute("src", "images/white.png");
    cards[cardChosenIds[1]].setAttribute("src", "images/white.png");
    cards[cardChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  }
 
  cardChosen = [];
  cardChosenIds = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].image);
  if (cardChosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
}
