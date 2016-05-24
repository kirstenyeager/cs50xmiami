/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
function calcCircumfrence (r) {

  var circumference = 3 * 3.14 * r;
  return circumference;

}
function calcArea (r) {
    var area = 3.14 * radius * radius;
    return area;
}
var radius = 5;
var circumference = calcCircumfrence (radius);
var area = calcArea(radius);

console.log("The circumference is " + circumference + ".");
console.log("The area is " + area + ".");
