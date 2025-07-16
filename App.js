//  Task 1: Write a function declaration add that adds 2 numbers.
function addF(num1, num2) {
   return num1+num2;
}
console.log(addF(2, 3));

// Task 2: Rewrite it as a function expression.
const addE = function(num1, num2) {
   return num1+num2;
}
console.log(addE(6, 6));

// Task 3: Rewrite it as an arrow function.
const addA = (num1, num2) => {
   return num1+num2;
}
console.log(addA(2, 1));

// Task 4: Write an arrow function with implicit return
const addI = (num1, num2) => num1+num2;
console.log(addI(2, 1));

// Task 5: Write an arrow function that returns an object.
const createUser = (name, age) => ({name, age});

const obj = {
   value: 42,
   normalFunc: function() {
      console.log(this.value);
   },
   arrowFunc: () => {
      console.log(this.value);
   }
}
obj.normalFunc();
// obj.arrowFunc();