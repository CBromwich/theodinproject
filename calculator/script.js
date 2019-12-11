const BUTTONS = '123+456-789/C0=*'; // Iterable list of buttons. Looped through by generateButtons()
const INPUT = document.querySelector('#input'); // global for the input field so it doesn't need to be instantiated 100 times

// Generate calculator buttons
const generateButtons = (buttonList) => {
  let buttonDiv = document.querySelector('.buttons');
  for (let i = 0; i < buttonList.length; i++) {
    let buttonID = buttonList[i];
    let newButton = document.createElement('button');
    // Sets button ID to button + the character it represents and set its label accordingly
    newButton.id = `button${buttonID}`;
    newButton.textContent = buttonID;

    // Assign each button a className based on whether it's a number or function (operand)
    if (isNaN(parseInt(buttonList[i]))) {
      newButton.className = 'functionButton';
    }
    else {
      newButton.className = 'numButton';
    }
    buttonDiv.appendChild(newButton);
  }
}

// Dynamically match input width to button div width
const setInputWidth = () => {
  INPUT.style.width = `${document.querySelector('.buttons').offsetWidth - 5.5}px`;
}

// Set button div width to just over 4 buttons worth of px
const setButtonDivWidth = (factor) => {
  let buttonWidth = getElementWidth('#button1');
  console.log(buttonWidth);
  let buttonDiv = document.querySelector('.buttons');
  buttonDiv.style.width = `${(buttonWidth * factor)}px`;
}

// returns width of passed in element
const getElementWidth = (element) => {
  return document.querySelector(element).offsetWidth;
}

// display user button presses in input field
const insertCharacter = (char) => {
  INPUT.value += char;
}

// Clear input field
const clearInput = () => {
  INPUT.value = '';
}

// Add eventlistener that corresponds to button's text  
const mapButtons = () => {
  // Map 0-9
  for (let i = 0; i <= 9; i++) {
    let button = document.querySelector(`#button${i}`); // Dynamically select button
    button.addEventListener('click', () => {
      insertCharacter(button.textContent)
    }); 
  }

  // Map operands
  let operands = '+-*/';
  for (let operand of operands) {
    let button = document.querySelector(`#button\\${operand}`);
    button.addEventListener('click', () => {
      insertCharacter(operand);
    });
  }
  
  // Map clear
  document.querySelector('#buttonC').addEventListener('click', () => {
    clearInput();
  });

  // Map =
  document.querySelector('#button\\=').addEventListener('click', () => {
    evaluate(INPUT.value);
  })
}

// Evaluate the expression in the input field. Set field to answer or Err if not valid
const evaluate = (expression) => {
  try {
    INPUT.value = math.round(math.evaluate(expression), 2);
  } catch (exception) {
    INPUT.value = 'Err';
  }
}

// Runs after entire page has loaded (including CSS)
window.addEventListener('load', () => {
  generateButtons(BUTTONS);
  setButtonDivWidth(4);
  setInputWidth();
  mapButtons();
});