// 2. Use JavaScript to create an `<img>` element dynamically. Set the `src` attribute to an image URL, and append it to the "dynamicContainer" div.
const parentContainer = document.getElementById("dynamicContainer");

const createIMG = document.createElement("img");
createIMG.src = "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png";
createIMG.alt = "Dynamically created image";

parentContainer.appendChild(createIMG);


// ### **Task 2: Removing DOM Elements**

// 4. Use JavaScript to perform the following tasks:
//    a. Select and remove a specific list item using the `removeChild()` method.
const modifyList = document.getElementById("exampleList");
console.log(modifyList);

const removeItem = modifyList.children[2];
console.log(removeItem);
modifyList.removeChild(removeItem);

//    b. Remove the last list item using the `remove()` method.
const lastItem = modifyList.lastElementChild;
console.log(lastItem);
modifyList.remove();

//    c. Clear all list items from the `<ul>` using the `innerHTML` property.
modifyList.innerHTML = "";