console.clear();

const operand1 = 12;
const operand2 = 4;

function add() {
  let result = operand1 + operand2;
  console.log(result);
}

let addieren = document.querySelector('[data-js="add"]');
addieren.addEventListener("click", add);

let sub = document.querySelector('[data-js="subtract"]');

sub.addEventListener("click", () => {
  let result = operand1 - operand2;
  console.log(result);
});

let mul = document.querySelector('[data-js="multiply"]');

mul.addEventListener("click", () => {
  let result = operand1 * operand2;
  console.log(result);
});

let div = document.querySelector('[data-js="divide"]');

div.addEventListener("click", () => {
  let result = operand1 / operand2;
  console.log(result);
});

let pot = document.querySelector('[data-js="exponent"]');

pot.addEventListener("click", () => {
  let result = operand1 ** operand2;
  console.log(result);
});

let mod = document.querySelector('[data-js="modulo"]');

mod.addEventListener("click", () => {
  let result = operand1 % operand2;
  console.log(result);
});

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
