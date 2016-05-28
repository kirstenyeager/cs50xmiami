/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...
function helloWorld (lang)
{
  if (lang === "es")
  {
    return "Hola, Mundo";
  }
  else if (lang ===  "de")
  {
    return "Hej, Verden";
  }
  else
  {
    return "Hello, World";
  }
}

var greeting = helloWorld("en");
console.log(greeting);

var greeting = helloWorld("es");
console.log(greeting);

var greeting = helloWorld("de");
console.log(greeting);
