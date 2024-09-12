let num1 , num2, operation, answer, ; 
x = parseInt(prompt ("First number")) ; 
operation = prompt ("What operation do you want done?") ; 
y = parseInt (prompt ("Second number")) ; 

function addition (num1, num2) {
answer = num1 + num2
}

function subtraction (num1,num2) {
    answer = num1 - num2
}

function multiplication (num1, num2) {
   answer = num1 * num2
   
}

function division (num1, num2) {
    answer = num1 / num2

}




if (operation == "addition") {
addition (x,y); 
console.log (answer) ; 
} 

else if (operation == "subtraction") {
 subtraction (x,y); 
console.log (answer) ;
}

else if (operation == "multiplication") {
multiplication (x,y); 
console.log (answer) ; 
}

else if (operation == "division") {
division (x,y); 
console.log (answer) ; 
    }

