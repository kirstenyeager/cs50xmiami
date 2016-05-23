/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...

  var res1 = a.slice(0, 2) + b.slice(2);


  var res2 = b.slice(0, 2) + a.slice(2);


  var res3 = res1+ " " +res2;

  return res3;

}
var str1 = "Hello";
var str2 = "World!";


console.log(mixUp(str1, str2));
