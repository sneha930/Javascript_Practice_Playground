// Template Literals
// Task: greet function with name & day
function greet(name, day) {
  return `Hello, ${name}! Have a great ${day}!`;
}
console.log(greet("Sneha", "Monday")); 


// Default Parameters
// Task: order function with default quantity = 1
function order(item, quantity = 1) {
  console.log(`You ordered ${quantity} ${item}.`);
}
order("Coffee");  
order("Tea", 2);  

// Spread Operator
// Task: Merge two arrays of fruits
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Mango", "Orange"];
const allFruits = [...fruits1, ...fruits2];
console.log(allFruits); 

// Rest Operator
// Task: logNames function with rest operator
function logNames(...names) {
  console.log("Names:", names);
}
logNames("Sneha", "Rahul", "Amit");  
