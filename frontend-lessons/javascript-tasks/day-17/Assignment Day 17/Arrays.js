// Task 1: Array Basics
const cities = ["Quezon City", "Malabon", "Taguig", "Makati", "Caloocan"];

console.log(cities[2]);

cities[1] = "Mandaluyong";

console.log(cities);

// Task 2: Array Operations
const fruits = ["Mango", "Banana", "Grapes"];

fruits.push("Orange");
fruits.pop();

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Task 3: Advanced Array Techniques
const numbers = [5, 8, 12, 24, 1];

const doubblednums = numbers.map(function(num) {
    return num * 2;
})

console.log(doubblednums);

const greaterThanFive = numbers.filter(function(num) {
    return num > 5;
})

console.log(greaterThanFive);

// Task 4: Array Manipulation
const colors = ["Black", "Beige", "Brown", "White"];

colors.unshift("Blue");
colors.shift();

const favColor = colors.slice(1, 3);
console.log(favColor);

// Task 5: Array Splicing
const characters = ["Hello", "Love", "Goodbye", "Money", "Play", "Sleep"];

characters.splice(2, 0, "Eat");
characters.splice(2, 0, "Reminisce");
console.log(characters);

characters.splice(4, 3);
console.log(characters);