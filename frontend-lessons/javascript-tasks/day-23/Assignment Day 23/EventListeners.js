// Task 1: Click Event Listener

// 2. Use JavaScript to select the button element by its ID and attach a click event listener to it.
const button = document.getElementById('myButton');

// 3. In the event listener, display an alert with the message "Button clicked!" when the button is clicked.
button.addEventListener("click", function(event) {
    alert("Button clicked!");
});


//  Task 2: Double-Click Event Listener

// 5. Use JavaScript to select the new button element and attach a double-click event listener to it.
const doubleClickButton = document.getElementById("dblClickButton");

// 6. In the event listener, display an alert with the message "Button double-clicked!" when the button is double-clicked.
doubleClickButton.addEventListener("dblclick", function(event) {
    alert("Button double-clicked!");
});


//  Task 3: Mouseenter Event Listener

// 8. Use JavaScript to select the new button element and attach a mouseenter event listener to it.
const mouseEnterButton = document.getElementById("mouseEnterButton");

// 9. In the event listener, change the background color of the button to a different color when the mouse enters the button.
mouseEnterButton.addEventListener("mouseenter", function(event) {
    mouseEnterButton.style.backgroundColor = "lightgreen";
});
// 10. Test each button to ensure that the respective event listener responds correctly to user interactions.


//  Task 4: Keypress Event Listener

// 12. Use JavaScript to select the input element by its ID and attach a keypress event listener to it.
const inputElement = document.getElementById("myInput");

// 13. In the event listener, log the pressed key to the console using `console.log()`.
inputElement.addEventListener("keypress", function(event) {
    console.log("Keypress event:", event.key);
});

// 14. Test the input field by typing to see the keypress events logged in the console.