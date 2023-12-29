// Task 1: Selecting Elements

// 2. Use JavaScript to select and log the following elements to the console:
//    a. All paragraphs on the page using `getElementsByTagName`.
const paragraphs = document.getElementsByTagName("p");
console.log("All paragraphs: ", paragraphs);

//    b. All elements with the class "info" using `getElementsByClassName`.
const infoElements = document.getElementsByClassName("info");
console.log("Elements with class info: ", infoElements);

//    c. The element with the ID "header" using `getElementById`.
const headerID = document.getElementById("header");
console.log("Elements with id header: ", headerID);

//    d. The first element with the class "highlight" using `querySelector`.
const highlightElement = document.querySelector(".highlight");
console.log("First element with class highlight: ", highlightElement);


// Task 2: Modifying Elements
// 3. Change the text content of the second paragraph to "This paragraph is now updated!".
const secondParagraph = paragraphs[1];
secondParagraph.textContent = "This paragraph is now updated!";

// 4. Change the background color of the div with the ID "header" to a different color of your choice.
headerID.style.backgroundColor = "lightblue";


// Task 3: Creating and Appending Elements
// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.
const newH3Element = document.createElement("h3");
newH3Element.textContent = "New Section";

// 6. Append the newly created `h3` element to the end of the body of the HTML document.
document.addEventListener("DOMContentLoaded", function() {
    if (!document.getElementById("newSection")) {
        newH3Element.id = "newSection";
        document.body.appendChild(newH3Element);
    }
})

// Task 4: Removing Elements
// 7. Remove the first paragraph from the document.
const firstParagraph = paragraphs[0];
firstParagraph.parentNode.removeChild(firstParagraph);


// Task 5: Handling Events
// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!" to the console when clicked.
headerID.addEventListener("click", function() {
    console.log("Header clicked!");
})


// Task 6: Advanced Element Manipulation
// 9. Create an array of colors.
const colors = ["grey", "blue", "brown", "green", "beige"];

// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.
for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = colors[i % colors.length];
}