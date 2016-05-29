/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...
var choices = ["blue", "pink", "green", "yellow"];

var suffix;

for (var i = 1; i < 5; i++)
{
  if (i === 1){
    suffix = "st";
  }
  else if (i === 2){
    suffix = "nd";
  }
  else if (i === 3) {
    suffix = "rd";
  }
  else {
    suffix = "th";
  }
    console.log("My " + i + suffix +" choice is " + choices[i-1]);
  }
