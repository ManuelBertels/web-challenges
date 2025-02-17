console.clear();

let color = document.querySelector('[data-js="input-color"]');
let div = document.querySelector('[data-js="box"]');
let radius = document.querySelector('[data-js="input-radius"]');

radius.addEventListener("input", () => {
  let r = radius.value;
  div.style.borderRadius = `${r}px`;
});

color.addEventListener("click", () => {
  let y = color.value;

  let neu = `hsl(${y},60%,60%)`;
  div.style.backgroundColor = neu;
});
