//these are the prompts and created variables 
let num1, num2, operation, answer; //variables for 2 numbers that get inputted, what operation will be done to them, and an answer
console.log("This is a calculator!"); //welcome message and instructions 
console.log("This calulator can do addition, subtraction, mulitplication, division, and powers, just put two numbers and the operation in!");
console.log("For squareroot and trigometric functions (sin, cos, tan), input anything for the second value. Trigonometrics show up as radians.")

//get input from user
x = parseInt(prompt("First number")); //first input into a integer
operation = prompt("What operation do you want done?"); //put operation into a string
y = parseInt(prompt("Second number"));//second input into a integer

//these are all the functions that do a math operation and then return the answer in the console log
function addition(num1, num2) {
    answer = num1 + num2 //adds the two numbers and stores the value as answer
}

function subtraction(num1, num2) {
    answer = num1 - num2 //subtracts the first number from the second number, then becomes answer
}

function multiplication(num1, num2) {
    answer = num1 * num2 //multiplies the two numbers

}

function division(num1, num2) {
    answer = num1 / num2 //divides the first number by the second number

}

function power(num1, num2) {
    answer = num1 ** num2 //num1 is powered to num2 
}

function squareroot(num1) { //finds the square root of num1, num2's value does not matter for this 
    answer = Math.sqrt(num1);
}

function sin(num1) { //gives the radian value for the sin function of num1
    answer = Math.sin(num1);
}

function cos(num1) {
    answer = Math.cos(num1);//gives the radian value for the cos function of num1
}

function tan(num1) {
    answer = Math.tan(num1);//gives the radian value for the tan function of num1
}



//these are the logics that get broadcasted to the user depending on what function they typed in for 'operations'
if (operation == "addition") {
    addition(x, y); //inputs x and y into the function addition 
    console.log(answer); //logs the answer that is inside function 
}

else if (operation == "subtraction") {
    subtraction(x, y);//inputs x and y into the function subtraction 
    console.log(answer);
}

else if (operation == "multiplication") {
    multiplication(x, y);//inputs x and y into the function multiplication 
    console.log(answer);
}

else if (operation == "division") {
    division(x, y);//inputs x and y into the function division 
    console.log(answer);
}

else if (operation == "power") {
    power(x, y);//inputs x and y into the function power 
    console.log(answer);
}
else if (operation == "squareroot") {
    squareroot(x);//inputs x and y into the function squareroot 
    console.log(answer);
}
else if (operation == "sin") {
    sin(x);//inputs x and y into the function sin 
    console.log(answer);
}

else if (operation == "cos") {
    cos(x);//inputs x and y into the function cos 
    console.log(answer);
}

else if (operation == "tan") {
    tan(x);//inputs x and y into the function tan 
    console.log(answer);
} else {
    // if user enters an unrecognized operation, display an error message
    console.log("Invalid operation. Please try again.");
}