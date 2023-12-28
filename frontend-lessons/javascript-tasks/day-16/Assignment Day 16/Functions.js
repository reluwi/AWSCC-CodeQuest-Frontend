// 1. Create a function named `greet` that prints a greeting message to the console.
function greet() {
    console.log("Hi, Welcome to JavaScript lesson!");
}

// 2. Call the `greet` function to display the greeting.
greet();

// 3. Modify the `greet` function to take a parameter `name` and greet the person by name.
function greetPerson(name) {
    console.log("Nice to meet you, " + name + "!");
}

greetPerson("Renzo");

// 4. Create a function named `addNumbers` that takes two parameters and returns their sum.
function addNumbers(a, b) {
    return a + b;
}

// 5. Call the `addNumbers` function with different values and print the results.
let sum1 = addNumbers(5, 3);
console.log(sum1);

let sum2 = addNumbers(25, 12);
console.log(sum2);

let sum3 = addNumbers(36, 89);
console.log(sum3);

// 6. Create a function named `calculateAverage` that takes an array of numbers as a parameter and returns the average.
function calculateAverage(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum / nums.length;
}

// 7. Use the `calculateAverage` function with an array of numbers and print the result.
const numbers = [25, 21, 42, 5, 68];
const average = calculateAverage(numbers);

console.log("The average of given array of numbers is " + average);