/**Function
 * declared by keyword function
 * executed when called/invopked
 * code can be reused using functions
 */
function myfunction() {
  console.log("This is a sample function");
}
// myfunction();
// functions can contain parameters inside the parenthesis
// the values parsed inside the parenthesis are agruments

function areaSquare(s1, s2) {
  return s1 * s2; //js stops executing when it reaches the return statement
}
area = areaSquare(20, 20);
// console.log(area);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
celsius = toCelsius(200);
console.log(celsius);
