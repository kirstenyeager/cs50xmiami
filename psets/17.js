/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize (num, noun) {
  if (noun === "sheep")
  {
    return num + " " + noun;
  }
  if (noun === "goose")
  {
    return num + " " + "geese";
  }
  if (num === 1)
  {
    return num + " " + noun;
  }
  else {
    return num + " " + noun + "s";
  }


}

// var num = 2;
// var noun = "dog";

var noun = ["dog", "cat", "cow", "penguin", "goose", "sheep"];
var num = [1, 2, 3, 4, 5, 6];
var phrase;

for (var i = 0; i < num.length; i++)
{
  phrase = pluralize(num[i], noun[i]);
  console.log (phrase);
}
