// 1. Create a variable named `temperature` and assign it a value.
let temperature = 37;

// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
if (temperature > 30) {
    console.log("It feels like summertime!");
}

// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
temperature = 27;

if (temperature > 30) {
    console.log("It feels like summertime!");
} else {
    console.log("It's time for a good hot choco drink!");
}

// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
let time = 20;

// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
if (time < 12) {
    console.log("Good morning, it's time for your breakfast.");
} else if (time >= 12 && time < 6) {
    console.log("Good afternoon, don't forget to take a break!");
} else {
    console.log("Good evening, you did great today!");
}

// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Time for cardio to start the week.");
        break;
    case "Tuesday":
        console.log("Lower body for the second day.");
        break;
    case "Wednesday":
        console.log("Upper body and core the third day.");
        break;
    case "Thursday":
        console.log("Active rest and recovery day.");
        break;
    case "Friday":
        console.log("Lower body day mainly glutes.");
        break;
    case "Saturday":
        console.log("Another upper body day.");
        break;
    case "Sunday":
        console.log("Finally, a good rest and recovery day.");
        break;
    default:
        console.log("Too busy to workout.");
}
