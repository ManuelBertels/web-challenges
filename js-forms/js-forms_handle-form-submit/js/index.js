console.clear();

const formular = document.querySelector('[data-js="form"]');

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  let daten = event.target.elements;

  console.log(
    `${daten.firstName.value}, ${daten.lastName.value}, ${daten.age.value}, ${daten.email.value}, ${daten.complaint.value}, ${daten.details.value}, ${daten.badness.value}, ${daten.orderDate.value}, ${daten.tos.value}`
  );
});
