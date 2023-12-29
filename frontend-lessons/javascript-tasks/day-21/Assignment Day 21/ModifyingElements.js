// Task 1: Adding Attributes

// 2. Use JavaScript to perform the following tasks:
//    a. Add a `target="_blank"` attribute to the anchor element using the `setAttribute` method.
const anchorLink = document.getElementById("myLink");
anchorLink.setAttribute("target", "_blank");

//    b. Log the updated anchor element to the console.
console.log(anchorLink);


// Task 2: Adding Class Using `classList`

// 4. Use JavaScript to add the class "highlight" to the `<div>` element using the `classList` property.
const highlightDiv = document.getElementById("myDiv");
highlightDiv.classList.add("highlight");


// Task 3: Removing Class Using `remove`

// 6. Use JavaScript to remove the class "highlight" from the `<div>` element using the `classList` property.
const removeHighlightDiv = document.getElementById("my2ndDiv");
removeHighlightDiv.classList.remove("highlight");


// Task 4: Adding Text to HTML Element

// 8. Use JavaScript to change the text content of the `<p>` element to a new value.
const changeParagraph = document.getElementById("myParagraph");
changeParagraph.textContent = "This paragraph has updated text content.";


// Task 5: Adding Styles to HTML Elements in JavaScript

// 10. Use JavaScript to perform the following tasks:
//     a. Set the text color of the `<p>` element to "red".
const changeParagraphStyle = document.getElementById("my2ndParagraph");
my2ndParagraph.style.color = "red";

//     b. Set the background color of the `<p>` element to "lightgray".
my2ndParagraph.style.backgroundColor = "lightgray";

//     c. Set the font size of the `<p>` element to "18px".
my2ndParagraph.style.fontsize = "18px";