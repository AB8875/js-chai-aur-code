//-------filter--------------//
//Creates a new array with only those elements that pass a test condition.
const users = [
  { name: "Abhishek", isActive: true },
  { name: "Ankit", isActive: false },
  { name: "Prahlad", isActive: true }
];

const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);


//---------------map----------------//
// Creates a new array by applying a function to each element.
const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
// console.log(squares); // [1, 4, 9]



//---------------reduce--------------//
// Applies a function accumulatively to reduce the array to a single output 
// (number, object, string, etc.)
const cart = [100, 250, 50];
const total = cart.reduce((sum, price) => sum + price, 0);
console.log(total); // 40
