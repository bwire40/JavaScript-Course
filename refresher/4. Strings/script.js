// strings, working with strings

let x;

const name = "bwire";
const myAge = 30;

//concatenation.
x = "Hello, my name is " + name + " and i am " + myAge + " years old.";

//template literals
x = `Hello my name is ${name} and i am ${myAge} years old.`;

// properties and methods
const s = "hello World";

// length is a properti
x = s.length;

//access value by number key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(1);
x = s.indexOf("h");

x = s.substring(1, 4);
x = s.slice(0, 4); //returns a section of a string

x = s.trim();
x = s.replace("Hello", "Hi");

x = s.includes("Hi");

x = s.valueOf();
x = s.split(" "); // splits and returns an array

x = s.charAt(1).toUpperCase();

console.log(x);
