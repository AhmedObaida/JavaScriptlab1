a = prompt("Enter the coffiecient A");
b = prompt("Enter the coffiecient B");
c = prompt("Enter the coffiecient C");

//var X = (-b ± (b ** 2 - 4 * a * c) ** 0.5) / (2 * a)
var d= ((b*b) - (4*a*c))
var Sol1  = ((b*(-1))+ Math.sqrt(d)) / (2*a);
var Sol2  = ((b*(-1))- Math.sqrt(d)) / (2*a);

document.write(Sol1,"<br>");
document.write(Sol2);

