console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 2;

if (number % 2 === 0) {
  console.log("even number");
} else if (number % 2 > 0) {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 50;

if (numberOfHotdogs < 5) {
  let price = numberOfHotdogs * 2;
  console.log("der gesamtpreis beträgt " + price);
} else if (numberOfHotdogs > 5 && numberOfHotdogs < 100) {
  let price = numberOfHotdogs * 1.5;
  console.log("der gesamtpreis beträgt " + price);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs <= 1000000) {
  let price = numberOfHotdogs * 1;
  console.log("der gesamtpreis beträgt " + price);
} else if (numberOfHotdogs >= 1000000) {
  let price = numberOfHotdogs * 0.1;
  console.log("der gesamtpreis beträgt " + price);
}

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
