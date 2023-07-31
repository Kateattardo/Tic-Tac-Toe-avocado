//constants

const colors = {
    "1": "green",
    "-1": "yellow",
    "null": "white"
  };
  const numberCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  //Game variables

  const board = "turn, winner;"

  //cached

const message = document.querySelector("h1");
const playAgainBtn = document.querySelector('button');

//functions

function init(){
  board = Array(9).fill(null);
  turn = 1;
  winner = null;
  render();
}

document.getElementById("board").addEventListener("click");
playAgainBtn.addEventListener("click", initialize);


// Test  variables, then print()


//// Update all changes, then print()