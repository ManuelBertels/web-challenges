console.clear();

let firstinput = document.querySelector('[data-js="first-input"]');
let button = document.querySelector('[data-js="button-uppercase"]');
let output = document.querySelector('[data-js="output"]');

let zuweisung = () => {
  output.textContent = firstinput.value;
};

button.addEventListener("click", zuweisung);
