console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
for (i = 0; i < programmingLanguages.length; i++) {
  ol.innerHTML += `<li>${programmingLanguages[i]}</li>`;
}
// --^-- write or modify code above this line --^--
