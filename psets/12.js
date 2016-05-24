/*
The Lifetime Supply Calculator part 2

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// write your solution here...

function  calculateSupply(a, b) {
  var maximumAge = 90;
  var totalNeed = (maximumAge - a) * 365 * b;
  return totalNeed;
}

function print(x, maximumAge)
{
  console.log("You will need " + x + " to last you until the ripe old age of " +maximumAge + ".");
}

var maximumAge = 90;
// passing in first set of parameters
var currentAge = 50;
var dailyConsumption = 4;

x = calculateSupply(currentAge, dailyConsumption);
print(x, maximumAge);

// passing in second set of parameters
 currentAge = 23;
 dailyConsumption = 10;

 x = calculateSupply(currentAge, dailyConsumption);
print(x, maximumAge);

// passing in third set of parameters
currentAge = 2;
dailyConsumption = 100;

x = calculateSupply(currentAge, dailyConsumption);
print(x, maximumAge);
