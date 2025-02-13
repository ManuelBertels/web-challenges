const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  const age = Number(input.value);

  if (age < 18 && age >= 12) {
    output.innerHTML = "Du bist ein teenager";
  } else if (age < 12) {
    output.innerHTML = "Du bist ein Kind";
  } else {
    output.innerHTML = "Du bist erwachsen";
  }

  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
