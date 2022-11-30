num1 = prompt("Enter first number");
num2 = prompt("Enter second number");

// sum of last digits of the numbers 
// if num1 = 12  , num2= 13  --> sum = 2+3 = 5 

lastDigit1 = num1 % 10 ;
lastDigit2 = num2 % 10 ;

sum = lastDigit1 + lastDigit2 ;
console.log("sum= " , sum);