// single line commenting

/* mulitline 
comments
*/

// const name = "emanuel bwire";
// const age = 20;

// variables-containers

// var let and const

// let firstName = "john";
// let lastName = "bwire";
// let age = 24;

// let a, b, c;

// a = 20;
// b = 30;
// c = 40;

// console.log(c);

// const arr = [1, 2, 3, 4];

// arr.push(5);
// console.log(firstName, lastName, age);
// console.log(arr);
// console.log("***************************************");

//  data types

/**
 * primitive data types - predefined by the language and is named by a reserved keyword
 *  string-sequence of characters,
 *  number,
 *  boolean-true or flase,
 *  null-intentional empty value
 *  undefined-undefined variable
 *  symbol- built in object
 *  BigInt-numbers that are greater than the number type
 *
 * reference types - or objects. non primitive, objects, arrays etc
 * static typing vs dynamic typing
 *      js is dynamically-types language. we dont explicitly define the types of our variables.
 */

const firstName = "sam";
const age = 20;
const temp = 29.6;
const hasKids = true;
const aptNum = null; // null shows its an object when getting its type is an object. but null is not an object.
let score; //undefined variable returns undefined type

const id = Symbol("íd"); //returns a unique sysmbol value

// reference types

// arrays,object literals, functions

const arr = [1, 2, 3, 4, 5]; //array of numbers

const person = {
  name: "emmanuel",
}; //object person

const func = () => {
  console.log("Hello");
};

const output = func; //function object

console.log(output, typeof output);

// NB:
// primitive types are stored on the stack memory
// reference are stored in the heap memory
