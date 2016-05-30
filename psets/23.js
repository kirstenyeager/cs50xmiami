/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var movieArray = [];

function movie (title, duration, stars)
{
  this.title = title;
  this.duration = duration;
  this.stars = stars
}

var big = new movie ("Big", 90, ["cat", "dog"]);
var titanic = new movie ("Titanic", 210, ["Tom", "Jerry"]);
var reader = new movie ("The Reader", 100, ["Al", "Hardy"]);

movieArray.push(big);
movieArray.push(titanic);
movieArray.push(reader);
//console.log(big.title + big.stars[0] + big.stars[1]);

for (var i = 0; i < movie.length; i++)
{
  console.log(movieArray[i].title + " lasts for " + movieArray[i].duration + " minutes. Stars: \r");
  for(var j = 0; j< 2; j++)
  {
    console.log(movieArray[i].stars[j] + "\r");
  }
}
