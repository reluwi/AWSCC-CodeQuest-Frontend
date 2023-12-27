// 1. Use a `for` loop to count from 1 to 5 and print each number to the console.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. Create an array named `cookies` with different types of cookies (strings).
const cookies = ["Chocolate Chip", "Shortbread", "Butter", "Biscotti", "Macaron"];

// 3. Use a `for` loop to iterate over the `cookies` array and print each type of cookie to the console.
for (let i = 0; i < cookies.length; i++) {
    console.log("Buying a " + cookies[i] + " cookie.");
}

// 4.  Create a variable named `jarNotEmpty` and set it to `true`.
let jarNotEmpty = true;

// 5.  Use a `while` loop to simulate eating cookies while the jar is not empty.
let numCookies = 5;

while (jarNotEmpty) {
    console.log("Eating cookie");
    numCookies--;
    if (numCookies == 0) {
        jarNotEmpty = false;
    }
}

console.log("The jar is now empty.");