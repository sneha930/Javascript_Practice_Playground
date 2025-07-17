// ✅ Task 1: JSON Write an object book with: title, author, year Convert it to JSON Parse it back to an object Log the title.

const book = {
  title: "The Alchemist",
  author: "Paulo coelho",
}
const jsonString = JSON.stringify(book);
console.log(jsonString);

const parsed = JSON.parse(jsonString);
console.log(parsed);

// ✅ Task 2: Fetch: Use fetch to GET data from: https://jsonplaceholder.typicode.com/users
// Get the JSON response. Log the first user’s name.
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) 
  .then(data => console.log(data[0].name)); 


// ✅ Task 3: POST a new post to https://jsonplaceholder.typicode.com/posts
// Data: { title: 'Test', body: 'This is a test.', userId: 101 Log the response.
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Test",
    body: "This is a test.",
    userId: 101
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));


