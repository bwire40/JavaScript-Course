"use strict";
/**Function
 * declared by keyword function
 * executed when called/invopked
 * code can be reused using functions
 */
// function myfunction() {
//   console.log("This is a sample function");
// }
// myfunction();
// functions can contain parameters inside the parenthesis
// the values parsed inside the parenthesis are agruments

// function areaSquare(s1, s2) {
//   return s1 * s2; //js stops executing when it reaches the return statement
// }
// let area = areaSquare(20, 20);
// // console.log(area);

// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }
// const celsius = toCelsius(200);
// console.log(celsius);

// funtion expressions
// these are functions that can be stored in variables
// let x = function (a, b) {
//   return a * b;
// };
// // the variable can b used as a function
// const z = x(1, 3);
// console.log(z);
// x is an anonymous function, a function witout a name

// function hoisting, js functions can be called before they are declared

// self invoking functions
// function expressions can be made self invoking
(function () {
  let x = "Hello, I called myself!";
  console.log(x);
})();
// check the above syntax properly.
// an example of a self invoking anonymous function
