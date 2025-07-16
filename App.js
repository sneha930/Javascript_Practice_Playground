// ✅ Task: Add a property dynamically: user.country = "India"
const user = {
  name: "Sneha",
  age: 25,
  greet: function() {
    console.log(`Hello, I am ${this.name}`);
  }
};

user.greet();
user.country = "India"
console.log(user);

// ✅ Task: Loop through keys with for...in
for(let u in user) {
   console.log(u);
}

// ✅ Task: Add an item → push
const fruits = ["apple", "banana", "mango"];
fruits.push("Strawberry", "Jerry");
console.log(fruits);

// ✅ Task: Remove last item → pop
fruits.pop()
console.log(fruits);

// ✅ Task: Use for...of to log each fruit
for(const fruit of fruits) {
   console.log(fruit);
}

/* 🧩 Mini Challenge
Write a function that:
Takes an array of users like:

[
  { name: "Sneha", age: 25 },
  { name: "Amit", age: 30 }
]
Uses destructuring inside a loop to log:
“Name: Sneha, Age: 25” */
const users = [
  { name: "Sneha", age: 25 },
  { name: "Amit", age: 30 }
];

function logUsers(userArray) {
  for (const { name, age } of userArray) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
}
logUsers(users);


// ✔️ Bonus: Nested destructure example
// If you want to stretch:
const team = [
  { name: "Sneha", address: { city: "Pune" } },
  { name: "Amit", address: { city: "Mumbai" } }
];

for (const { name, address: { city } } of team) {
  console.log(`${name} lives in ${city}`);
}
