
var count = 0;

do
{
    // take name from user and check if it's a string
    var Name = prompt("Enter your name");
}while(isFinite(Name))

do
{
    count++ ;
    // take birth year from user and check if it's a number 
    var birthyear = prompt("Enter your birth year");
    if(birthyear<2010)
    {
        var Age = 2022 - birthyear;
        count = 4;
    }

}while(count<3 && (isNaN(birthyear) || birthyear>=2010))

document.write("<u>  Name:</u> ",Name , "<br>");
if(birthyear <2010 )
{
    document.write("<u> Birth Year:</u> ",birthyear , "<br>");
    document.write("<u> Age:</u> ",Age , "<br>");
}
else
{
    document.write("Invalid year");
}

