/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

function celsiusToFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function FarenheitToCelsius(farenheit) {
    (farenheit - 32) * 5 / 9;
}


var celsius = 50;

var farenheit1 = celsiusToFarenheit(celsius);

console.log(celsius+ "degeesC is " +farenheit1+".");

var farenheit2 = 100 ;

var celsius2 = FarenheitToCelsius(farenheit2);

console.log(farenheit2+ "degreesC is " +celsius2+".");
