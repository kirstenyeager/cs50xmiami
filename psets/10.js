/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
// function ()
// {
function randomJob (job) {
  var x = Math.random();
  if (x < .3)
  {
    job = "stripper";
  }
  else if (x > .29 && x < .66)
  {
    job = "drug dealer";
  }
  else {
    job = "proctologist in a maximum security prison";
  }
  return job;
}
function randomKids (kids)
{
  var kids;
  var y = Math.random();

    if (y < .3)
    {
      kids = "2";
    }
    else if (y > .29 && y < .66)
    {
      kids = "4";
    }
    else {
      kids = "25";
    }
    return kids;
  }
  function randomPartner (partner) {
    var partner;
    var w = Math.random();

      if (w < .3)
      {
        partner = "Margaret Thatcher";
      }
      else if (w > .29 && w < .66)
      {
        partner = "Homer Simpson";
      }
      else {
        partner = "Caitlyn Jenner";
      }
      return partner;
    }
  function  randomPlace (place) {
      var place;
      var w = Math.random();

        if (w < .3)
        {
          place = " maximum security prison";
        }
        else if (w > .29 && w < .66)
        {
          place = " convant";
        }
        else {
          place = "n abortion clinic";
        }
        return place;
      }
var job = randomJob (job);
var kids = randomKids (kids);
var partner = randomPartner (partner);
var place = randomPlace (place);
console.log("You will have " +kids + " kids with " + partner + " and work as a " +job + " at a" +place +".");
//}
