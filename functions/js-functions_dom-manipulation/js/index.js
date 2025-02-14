const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add functionality to the buttons on this page. When a button is clicked, the corresponding color should be applied to the box.
  1. Create a function `removeAllColors` that removes all color classes from the box.
  2. Create a function `addColor` that takes a class name as a parameter and adds that class to the box.
  3. Use the two functions in the event listeners for the buttons to apply the corresponding color to the box when a button is clicked.
*/

function remove() {
  redButton.classList.remove("red");
  greenButton.classList.remove("green");
  blueButton.classList.remove("blue");
  grayButton.classList.remove("gray");
}

function add_blue() {
  blueButton.classList.add("blue");
}

function add_green() {
  greenButton.classList.add("green");
}

function add_grey() {
  grayButton.classList.add("gray");
}

function add_red() {
  redButton.classList.add("red");
}

redButton.addEventListener("click", () => {
  remove();
  add_red();
});

blueButton.addEventListener("click", () => {
  remove();
  add_blue();
  /*
  Use your functions to:
    - remove all classes
    - then add the class name: "blue"
  */
});

greenButton.addEventListener("click", () => {
  remove();
  add_green();

  /*
  Use your functions to:
    - remove all classes
    - then add the class name: "green"
  */
});

grayButton.addEventListener("click", () => {
  remove();
  add_grey();
  /*
  Use your functions to:
    - remove all classes
    - then add the class name: "gray"
  */
});

// Write your two functions below:
