/*
The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string),
  and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title
  and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you
  read it yet or not. If you read it, log a string like
  'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
  like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

// write your solution here...
var bookArray = [];

function book (title, author, read ) {
  this.title = title;
  this.author = author;
  this.read = read
}

var theReader = new book("The End of the Affair", "Graham Greene", "yes");
var harryPotter = new book("The Comedians", "Graham Greene", "no");
var Leagues = new book("MacBeth", "William Shakespeare", "yes");
var Birds = new book("The Birds", "Alfred Hitchcock", "no");

bookArray.push (theReader);
bookArray.push (harryPotter);
bookArray.push (Leagues);
bookArray.push (Birds);
//
for (var i = 0; i < bookArray.length; i++)
{
  if (bookArray[i].read === "yes")
  {
    console.log("You've read " + bookArray[i].title + " by " + bookArray[i].author + ".");
  }
  else
    {
      console.log("You need to read " + bookArray[i].title + " by " + bookArray[i].author + ".");
    }
}
