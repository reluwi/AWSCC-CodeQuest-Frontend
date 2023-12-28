// Task 1: Object Basics
const book = {
    title: "Learning Object in JS",
    author: "DSWD",
    year: 2023,
};

console.log(book.author);

// Task 2: Object Operations
const student = {
    name: "Renzo", 
    age: 18,
    grade: 92,
}

student.age = 19;
console.log("the age of " + student.name + " is " + student.age);

student.subjects = ["Math", "Programming", "Physical Education"];
console.log(student.subjects);

// Task 3: Object Methods
const rectangle = {
    width: 0,
    height: 0,
    calculateArea: function(width, height) {
        return width * height; 
    },
}

const areaOfRectangle = rectangle.calculateArea(5, 3);
console.log(areaOfRectangle);

// Task 4: Advanced Object Techniques
const person = {
    name: "Renzo",
    age: 19,
    address: "sa gilid lang",
}

delete(person.address);
console.log(person.address);

const employee = {
    name: "Renzo",
    postition: "Junior Programmer",
}

const employeeDetails = {
    ...person,
    ...employee,
}

console.log(employeeDetails.name);
console.log(employeeDetails.postition);