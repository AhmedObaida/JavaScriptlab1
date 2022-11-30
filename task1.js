/* 1-takes today’s Temperature as a parameter, prints: “HOT” if the entered temperature are 
more than or equals 30 and “Cold” if it’s less than 30 (use ternary conditional operator).*/


//what return from prompt is always stirng 
var Temperature = prompt("Enter Temperature");

// in if statemetn the string will be implicit parsed so if we enter 10 it will be parsed 
// and will be compared with 30 so we don't need to explicit parse it by using parseInt()



// if(Temperature >= 30)
// {
//     document.write("Hot");
// }
// else
// {
//     document.write("Cold");
// }




// use ternary conditional operator
(Temperature >= 30) ? document.write("Hot") : document.write("Cold");
