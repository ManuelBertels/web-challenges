console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowerbutton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

lowerbutton.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});
