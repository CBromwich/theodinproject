/*
 * Script to dynamically generate a grid which can then be drawn on by hovering over each "pixel"
 * Author: Cody Bromwich
 * Date: 11/28/2019
 * ----------------------------------------------------------------------------------------------
 * Dynamically generates num^2 amount of divs and a grid to hold the divs
 */
const createGrid = (num=16) => {
  let container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  for(let i = 1; i <= num**2; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = `div${i}`;
    container.appendChild(newDiv);
  }
}

/* 
 * Prompt user to input new grid size
 */
const getUserInput = () => {
  let input = parseInt(window.prompt("Please enter grid size: ", 16));
  if(isNaN(input)) {
    getUserInput();
  }
  console.log(input);
  return input;
}

/*
 * Sets div background color to black on hover
 */
const changeColorOnHover = () => {
  let container = document.querySelector('.container');
  let divList = container.querySelectorAll('div');

  divList.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'rgb(0,0,0)';
    });
  });
}

/*
 * Reset container div to allow for blank divs to be generated again
 */
const resetGrid = () => {
  let container = document.querySelector('.container');
  container.innerHTML = "";
  createGrid(getUserInput());
}

// Onload functions
document.addEventListener('DOMContentLoaded', () => {
  createGrid();
  changeColorOnHover();

  document.querySelector('#reset').addEventListener('click', () => {
    resetGrid();
    changeColorOnHover();
  });
});