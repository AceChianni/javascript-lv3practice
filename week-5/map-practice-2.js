// Problem 1: Multiply Each Element by 3
const numbers1 = [2, 4, 6, 8, 10];
const multipliedByThree = numbers1.map(num => num * 3);
console.log('Problem 1 - Multiplied by 3:', multipliedByThree);

// Problem 2: Convert Strings to Lowercase
const strings1 = ['HELLO', 'WORLD', 'JAVASCRIPT', 'NODE'];
const lowercasedStrings = strings1.map(str => str.toLowerCase());
console.log('Problem 2 - Lowercased Strings:', lowercasedStrings);

// Problem 3: Extract Ages from Objects
const people1 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const ages = people1.map(person => person.age);
console.log('Problem 3 - Ages:', ages);

// Problem 4: Append "!" to Each String
const strings2 = ['hello', 'world', 'javascript', 'node'];
const exclamatedStrings = strings2.map(str => str + '!');
console.log('Problem 4 - Exclamated Strings:', exclamatedStrings);

// Problem 5: Calculate Squares of Numbers
const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers2.map(num => num ** 2);
console.log('Problem 5 - Squared Numbers:', squaredNumbers);

// Problem 6: Extract First Letters from Strings
const strings3 = ['apple', 'banana', 'cherry', 'date'];
const firstLetters = strings3.map(str => str[0]);
console.log('Problem 6 - First Letters:', firstLetters);

// Problem 7: Convert Objects to Strings
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 499 },
  { name: 'Tablet', price: 299 }
];
const productStrings = products.map(product => `Product: ${product.name}, Price: ${product.price}`);
console.log('Problem 7 - Product Strings:', productStrings);

// Problem 8: Add 10 to Each Element
const numbers3 = [5, 10, 15, 20, 25];
const increasedByTen = numbers3.map(num => num + 10).join(', ');
console.log('Problem 8 - Increased by 10:', increasedByTen);

// Problem 9: Create Full Names from Objects
const people2 = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Emily', lastName: 'Jones' }
];
const fullNames = people2.map(person => `${person.firstName} ${person.lastName}`).join(', ');
console.log('Problem 9 - Full Names:', fullNames);

// Problem 10: Convert Fruit to HTML List Items
const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruitListItems = fruits.map(fruit => `<li>${fruit}</li>`).join('\n');
console.log('Problem 10 - Fruit List Items:\n', fruitListItems);
