// ✅ Task: Write a function checkNumber that takes a number: If it’s even, log “Even number” Else, log “Odd number”.

function checkNumber(num) {
  if(num%2 == 0) {
    console.log("Even number");
  }
  else {
    console.log("Odd number");
  }
}
checkNumber(2);
checkNumber(3);

// Task: Write a for loop that prints only even numbers from 1 to 10.
function printEvenNumbers() {
  for(let i=1; i<=10; i++) {
    if(i%2==0) console.log(i);
  }
}
printEvenNumbers();

// Task: Write a while loop that counts down from 5 to 1.
let i = 5;
while(i>=1) {
  console.log(i);
  i--;
}

// Task: Write a for...of loop that loops through an array of fruits and logs each fruit in uppercase.
const fruits = ["apple", "banana", "mango", "strawberry"];
for(const fruit of fruits) {
  console.log(fruit.toUpperCase());
}