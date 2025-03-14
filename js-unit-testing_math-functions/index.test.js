import { add, divide, multiply } from ".";
import { subtract } from ".";

test("adds two numbers and return 5", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("subtract two numbers and return 10", () => {
  const result = subtract(20, 10);
  expect(result).toBe(10);
});

test("multyply two numbers and return 8", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("divide two numbers and return 3", () => {
  const result = divide(6, 2);
  expect(result).toBe(3);
});
