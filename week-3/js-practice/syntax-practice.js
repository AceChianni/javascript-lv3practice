/**
 * Node.js Assignment: Ternary Operator & Array Destructuring
 *
 * Instructions:
 * 1. You will complete two exercises on the use of the ternary operator.
 * 2. You will complete two exercises on array destructuring without using functions.
 * 
 * Follow the TODO comments to complete each task.
 * Run the file using Node.js by typing `node exercise.js` in the terminal.
 */

// TASK 1: Ternary Operator Example
// Example: Use the ternary operator to determine if a number is positive or negative.
function checkPositiveOrNegative(number) {
  return number >= 0 ? "Positive" : "Negative";
}

// Example usage
console.log("Task 1 Example: Positive or Negative?");
console.log(checkPositiveOrNegative(10));  // Expected output: "Positive"
console.log(checkPositiveOrNegative(-5));  // Expected output: "Negative"

// TASK 1: Ternary Operator Exercise 1
// TODO: Use the ternary operator to check if a string is empty or not.
// Return "Empty String" if the string length is 0, otherwise return "Non-empty String".

function checkEmptyString(str) {
  return str.length === 0 ? "Empty String" : "Non-empty String";
}

// Example usage
console.log("\nTask 1 Exercise 1: Check Empty String");
console.log(checkEmptyString(""));     // Expected output: "Empty String"
console.log(checkEmptyString("Hello")); // Expected output: "Non-empty String"

// TASK 1: Ternary Operator Exercise 2
// TODO: Use the ternary operator to check if a number is divisible by 5.
// Return "Divisible by 5" if true, otherwise "Not Divisible by 5".

function checkDivisibleByFive(number) {
  return number % 5 === 0 ? "Divisible by 5" : "Not Divisible by 5";
}

// Example usage
console.log("\nTask 1 Exercise 2: Check Divisible by 5");
console.log(checkDivisibleByFive(10));  // Expected output: "Divisible by 5"
console.log(checkDivisibleByFive(7));   // Expected output: "Not Divisible by 5"


// TASK 2: Array Destructuring Example
// Example: Destructure an array of three cities and log the first two cities.
const cities = ["New York", "London", "Tokyo"];
const [city1, city2] = cities;

console.log("\nTask 2 Example: Array Destructuring (Cities)");
console.log(`First City: ${city1}, Second City: ${city2}`);  // Expected output: "First City: New York, Second City: London"

// TASK 2: Array Destructuring Exercise 1
// Destructure an array of three animals and log the second and third animals.
const animals = ["Lion", "Tiger", "Elephant"];
const [, secondAnimal, thirdAnimal] = animals; // Destructuring to get second and third animals

// Example usage
console.log("\nTask 2 Exercise 1: Animal Destructuring");
console.log(`Second Animal: ${secondAnimal}, Third Animal: ${thirdAnimal}`);  // Expected output: "Second Animal: Tiger, Third Animal: Elephant"

// TASK 2: Array Destructuring Exercise 2
// Destructure an array of four numbers and log the sum of the first two numbers.
const numbers = [8, 12, 20, 30];
const [firstNum, secondNum] = numbers; // Destructuring to get the first two numbers
const sum = firstNum + secondNum;

// Example usage
console.log("\nTask 2 Exercise 2: Sum of First Two Numbers");
console.log(`Sum: ${sum}`);  // Expected output: "Sum: 20"

// Task 3: Get creative and use the ternary operator with your own example
const age = 17;
const canVote = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log("\nTask 3: Voting Eligibility");
console.log(canVote); // Expected output: "Not eligible to vote"

// Task 4: Get creative and use array destructuring with your own example
const colors = ["Red", "Green", "Blue", "Yellow"];
const [primaryColor, secondaryColor] = colors; // Destructuring to get primary and secondary colors

console.log("\nTask 4: Color Destructuring");
console.log(`Primary Color: ${primaryColor}, Secondary Color: ${secondaryColor}`); // Expected output: "Primary Color: Red, Secondary Color: Green"
