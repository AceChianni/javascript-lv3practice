// Fully Worked Example

// Original function:
// This function takes a number as an argument and returns that number squared.
function square(n) {
  return n * n;
}

// Refactored function using arrow function syntax and renamed with "2":
let square2 = n => n * n;

// Usage
console.log(square2(5)); // Expected output: 25

// Problem Set: Refactor to Arrow Functions

// Problem 1: Basic Refactor to Arrow Functions
function double(x) {
  return x * 2;
}
let double2 = x => x * 2;

// Usage
console.log(double2(4)); // Expected output: 8

// Problem 2: Refactor with Multiple Parameters
function add(a, b) {
  return a + b;
}
let add2 = (a, b) => a + b;

// Usage
console.log(add2(3, 7)); // Expected output: 10

// Problem 3: Convert String to Uppercase
function capitalize(str) {
  return str.toUpperCase();
}
let capitalize2 = str => str.toUpperCase();

// Usage
console.log(capitalize2("hello")); // Expected output: "HELLO"

// Problem 4: Refactor Function with No Parameters
function greet() {
  return "Hello, world!";
}
let greet2 = () => "Hello, world!";

// Usage
console.log(greet2()); // Expected output: "Hello, world!"

// Problem 5: Complex Refactor with Multiple Statements
function calculateArea(length, width) {
  const area = length * width;
  console.log("Area:", area);
  return area;
}
let calculateArea2 = (length, width) => {
  const area = length * width;
  console.log("Area:", area);
  return area;
};

// Usage
console.log(calculateArea2(5, 3)); // Expected output: Area: 15, returns: 15

// Exporting the arrow functions
export { square2, double2, add2, greet2, calculateArea2, capitalize2 };
