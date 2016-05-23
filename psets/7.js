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
  var arr = s.split("");
  var text = "b";
  var i;
  // replace each instance of the first character with *
  for (i = 1; i < arr.length; i++) {
    if (arr[i] === arr[0])
    {
      arr[i] ="*";
    }
      text += arr[i];
  }
console.log(text);

}


var s = "babble";
fixStart(s);
