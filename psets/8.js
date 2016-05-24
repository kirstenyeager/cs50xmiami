/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

function verbing(word)
{
  var x = word.length;
  if (x > 2)
  {
    var wordEnding = (word.slice((x - 3), (x)));
    if (wordEnding === "ing")
    {
      finalWord = word + "ly";
    }
    else
      {
        finalWord = word + "ing";
      }
    }
    else if (x < 3)
      {
        finalWord = word;
      }
    return finalWord;
}

var word = "swimming";
var newWord = verbing(word);
console.log(newWord);
