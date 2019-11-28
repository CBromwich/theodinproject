let choiceMatrix = {1: "Rock", 2: "Paper", 3: "Scissors"}; // Dict to map numbers to human readable results.
let _computerChoice; //Global variable to keep track of computer choice. Used to display choice to user

/*
 * Unhides the results div and sets text based on computer and player choices
 */
function displayResult(result) {
  //console.log(_computerChoice); //For testing
  document.querySelector('.result').style.visibility = 'visible';;
  let resultText = document.querySelector('#result-text')
  resultText.textContent = result;
  let computerChoiceText = document.querySelector('#computer-choice');
  computerChoiceText.textContent = `Computer chose: ${choiceMatrix[_computerChoice]}`;
}

/*
 * Logic for rock/paper/scissors, returns result
 */
function parseGame(computerChoice, playerChoice) {
  _computerChoice = computerChoice;
  if(computerChoice == playerChoice) {
    return 'Draw'
  }
  else if((playerChoice - computerChoice + 3) % 3 == 1) {
    return 'You Win';
  }
  else {
    return 'You Lose'
  }
}

// Generates random number between min and max inclusive
function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Parses player choice and returns the number associated with that choice.
function parsePlayerChoice(id) {
  if(id == 'rock') {
    return 1;
  }
  else if (id == 'paper') {
    return 2;
  }
  return 3;
}


//On page load, add event listeners to each button that start the game.
document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      displayResult(parseGame(getComputerChoice(1,3), parsePlayerChoice(button.id)));
    });
  });
});

