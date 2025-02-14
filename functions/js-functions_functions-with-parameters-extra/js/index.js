console.clear();

/*
1: The function calls below are not working properly yet. Modify the function
   `printSquare` to log the square of the parameter to the console.
   The formula is: square = number * number
*/

function printSquare(number) {
  return (square = number * number);
}

console.log(printSquare(3));
console.log(printSquare(5));

/*
2: Write a function that accepts the radius of a circle as a parameter and logs
   the circumference to the console. The function does not exist yet.
   The formula is: circumference = 2 * Pi * radius
*/

function circle(radius) {
  let pi = 3.14;
  return (result = 2 * pi * radius);
}

console.log(circle(2));
console.log(circle(5));
// Uncomment the following function calls and implement the function `printCircumference`.

// printCircumference(4);
// printCircumference(6);

/*
3: Write a function that accepts the width and length of a rectangle
   and logs the following text to the console: "The area of the rectangle is ?".
   The function should replace the question mark "?" with the correct area.
   The function does not exist yet.
   The formula is: area = width * length
*/
function rectangle(breite, länge) {
  let area = breite * länge;

  let text = `The area of the rctangle ist ${area}`;

  return text;
}

console.log(rectangle(5, 7));
console.log(rectangle(3, 4));
// Uncomment the following function calls and implement the function `printRectangleArea`.

// printRectangleArea(5, 7);
// printRectangleArea(3, 4);
