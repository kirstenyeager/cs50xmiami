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

  var res1 = a.substr(2, 4);
  var res2 = b.substr(0, 2);
  var res3 = res2 + res1;

  var res4 = b.substr(2, 4);
  var res5 = a.substr(0, 2);
  var res6 = res5 + res4;

  var res7 = res3+ " " +res6;

  return res7;

}
var str1 = "Hello";
var str2 = "World!";
var str3 = mixUp(str1, str2);
console.log(str3);
