//these are the prompts and created variables 
let num1, num2, operation, answer;
console.log("This is a calculator!");
console.log("This calulator can do addition, subtraction, mulitplication, division, and powers, just put two numbers and the operation in!");
console.log("For squareroot and trigometric functions (sin, cos, tan), input anything for the second value. Trigonometrics show up as radians.")
x = parseInt(prompt("First number"));
operation = prompt("What operation do you want done?");
y = parseInt(prompt("Second number"));

//these are all the functions that do a math operation and then return the answer  
function addition(num1, num2) {
    answer = num1 + num2
}

function subtraction(num1, num2) {
    answer = num1 - num2
}

function multiplication(num1, num2) {
    answer = num1 * num2

}

function division(num1, num2) {
    answer = num1 / num2

}

function power(num1, num2) {
    answer = num1 ** num2
}

function squareroot(num1) { //finds the square root of num1 
    answer = Math.sqrt(num1);
}

function sin(num1) { //gives the radian value for the sin function
    answer = Math.sin(num1);
}

function cos(num1) {
    answer = Math.cos(num1);
}

function tan(num1) {
    answer = Math.tan(num1);
}







//these are the logics that get broadcasted to the user 
if (operation == "addition") {
    addition(x, y); //inputs x and y into the function addition 
    console.log(answer); //logs the answer that is inside function 
}

else if (operation == "subtraction") {
    subtraction(x, y);
    console.log(answer);
}

else if (operation == "multiplication") {
    multiplication(x, y);
    console.log(answer);
}

else if (operation == "division") {
    division(x, y);
    console.log(answer);
}

else if (operation == "power") {
    power(x, y);
    console.log(answer);
}
else if (operation == "squareroot") {
    squareroot(x);
    console.log(answer);
}
else if (operation == "sin") {
    sin(x);
    console.log(answer);
}

else if (operation == "cos") {
    cos(x);
    console.log(answer);
}

else if (operation == "tan") {
    tan(x);
    console.log(answer);
}