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

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


var celsius = 50;

var fahrenheit1 = celsiusToFahrenheit(celsius);

console.log(celsius+ " degeesC is " +fahrenheit1+" fahrenheit.");

var fahrenheit2 = 100 ;

var celsius2 = FahrenheitToCelsius(fahrenheit2);

console.log(fahrenheit2+ " degrees farenheit is " +celsius2+" degrees celsius.");
