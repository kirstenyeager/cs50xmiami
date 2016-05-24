/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
// converting celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// converting fahrenheit to celsius

function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
var fahrenheit2 = 100 ;
var celsius = 50;

console.log(celsius+ " degees celsius is " +celsiusToFahrenheit(celsius)+" fahrenheit.");

console.log(fahrenheit2+ " degrees farenheit is " +FahrenheitToCelsius(fahrenheit2)+" degrees celsius.");
