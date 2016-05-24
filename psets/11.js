/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...

function calculateAge (bYear)
{
  var d = new Date();
  var n = d.getFullYear();
  var age1 = (n - bYear);

  return age1;

}
var birthYear = 1992;
var age1 = calculateAge(birthYear);
var age2 = (age1 - 1);

console.log("They are either " + age2 + " or " + age1 + " years old.");

var birthYear = 1945;
var age1 = calculateAge(birthYear);
var age2 = (age1 - 1);

console.log("They are either " + age2 + " or " + age1 + " years old.");

var birthYear = 1789;
var age1 = calculateAge(birthYear);
var age2 = (age1 - 1);

console.log("They are either " + age2 + " or " + age1 + " years old.");
