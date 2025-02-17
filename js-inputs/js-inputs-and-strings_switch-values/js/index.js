console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const secondInput = document.querySelector('[data-js="secondInput"]');
const swichButton = document.querySelector('[data-js="button-swich"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();
});

swichButton.addEventListener("click", () => {
  let ersteeingabe = firstInput.value;
  let zweiteeingabe = secondInput.value;

  firstInput.value = zweiteeingabe;
  secondInput.value = ersteeingabe;
});
