/**OPERATORS
 * symbols used in expressions
 *
 * 1. Arithmetic operators
 * +,-,/,*,%-gives us the remainder of the division
 *
 *
 * 2. Concatenation
 *
 */

// concatenantion
x = "hello" + "me";

// exponent
x = 2 ** 3;

//increment
x++;
//decrement
x--;

// Assignment operators
x = 10;
x += 5;

// Comarison operators
x = 2 == 2; //true

//triple equal test the value and type
x = 2 === 2; //true
x = 2 === "2"; //false

// console.log(x);

//  type coersion
let y;

y = 5 + "5"; //type coercion
y = 5 * "5"; //js coersed it to a number and multiplied the two

console.log(y, typeof y);
