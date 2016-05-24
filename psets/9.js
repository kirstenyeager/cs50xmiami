/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(s) {
  // write your solution here...
  if (((s.search("not")) !== -1) && ((s.search("bad")) !== -1))
  {
    // get index of both "not" and "bad."
      var l = s.length;
      var x = s.indexOf("not");
      var y = s.indexOf("bad");
      // slice apart the beginnins and end of the sentence.
      var sent1 = s.slice(0, x);
      var sent2 = s.slice((y + 3), s.length);
      // add them back together with "good" in the middle.
      var newS = sent1 + "good" + sent2;
  }
  else
  {
     var newS = s;
  }
  return newS;
}
var sentence = "This restaruant is not altogether so bad, let's eat here again!";
var goodSentence = notBad(sentence);
console.log(goodSentence);
