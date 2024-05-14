// working with numbers
let x;
const num = new Number(3463);
x = num.toString();
x = num.toString();
x = num.toFixed(2); // returns a string, rounds up to the fixed decimals
x = num.toPrecision(2); //returns a string of two values
x = num.toExponential(2); // returns a string containing a nuymber in exponential notation
x = num.toLocaleString("en-US"); //converts to string of current locaL
x = num.valueOf();
x = Number.MAX_VALUE; //largest number that can be used in js using Number
x = Number.MIN_VALUE; //smallest possible number that can be used in js

console.log(x, typeof x);
