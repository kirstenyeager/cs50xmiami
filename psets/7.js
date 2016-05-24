/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
// split apart the string into an array
  var x = s.charAt(0);
  var string2 = x + "";
  for (var i = 1; i < s.length; i++)
  {
    if (s.charAt(i) === x)
    {
      string2 += "*";
    }
    else {
      string2 += s.charAt(i);
    }
  }
  return string2;

}


var s = "babble";
var final = fixStart(s);
console.log(final);
