/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum(a ,b) {
  if (a < b)
  {
    return b;
  }
  else
  {
    return a;
  }
}

var x = 1;
var y = 1;

for (var i = 0; i < 3; i++)
{
  var x = x * Math.random() * 10;
  var y = y * Math.random() * 10;
  var z = greaterNum(x, y);
  console.log("The greater number of " + x + " and " + y + " is " + z + ".");
}
