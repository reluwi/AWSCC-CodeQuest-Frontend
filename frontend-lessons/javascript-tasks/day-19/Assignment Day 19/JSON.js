// Task 1: JavaScript to JSON
const product = {
    name: "Cheese",
    price: 45,
    quantity: 120
}

const productJSON = JSON.stringify(product);
console.log(productJSON);

// Task 2: JSON to JavaScript
const bookJSON = '{"title": "How to Sleep Early", "author": "Renzo laging puyat", "publishedYear": "2023"}';

const book = JSON.parse(bookJSON);
console.log(book.title);

// Task 3: Advanced JSON Operations
const persons = [
    { name: "Renz", age: 19, city: "Malabon"},
    { name: "Jho", age: 20, city: "Taguig"},
    { name: "Mykol", age: 20, city: "Makati"}
];
  
const personsJSON = JSON.stringify(persons);
  
const personParsed = JSON.parse(personsJSON);

for(let i = 0; i < personParsed.length; i++) {
    console.log("Name: " + personParsed[i].name + ", City: " + personParsed[i].city);
}