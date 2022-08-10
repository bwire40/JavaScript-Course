// use "strict";
/**ARRAYS IN JAVASCRIPT *
 *  used to store mu7ltiple values in a single variable
 *  a data structure that can hold more than one value at a time
 *  arrays are objects in js but are best reffered to as Arrays
 *  array elements can be objects as you can have different data types in an array
 *
 * */
// Creating an array
const carsArray = ["volvo", "BMW", "Mclaren", "Ferrari", "mercedes"]; //this methods is preferred for readability and speed
// using the JS new keyword
// const carsArray = new Array("volvo", "BMW", "Mclaren");

// console.log(myArray);
// console.log(carsArray);
// array storing different types
// let myFunc = function (a, b) {
//   return a * b;
// };
// let person = { firstname: "manu", age: 23 };
// let mydate = new Date();

// carsArray[3] = myFunc;
// carsArray[4] = person;
// carsArray[5] = mydate;

// console.log(carsArray);
// Accessing array elements using indexes from 0
// console.log(carsArray[0]); //prints volvo
// changing array elements since they are mutable
// carsArray[2] = "Ferrari";
// console.log(carsArray[2]); //ferrari

/** ARRAY PROPERTIES AND METHODS */
// LENGTH PRPPERTY
// console.log(carsArray.length); //6
// accessing the first array element
// console.log(carsArray[0]); //volvo
// accessing the last element, subtract 1 from the array length
// console.log(carsArray[carsArray.length - 1]); //prints the current date

// looping throught the array
// the safest loop is for loop

// for (i = 0; i < carsArray.length; i++) {
//   console.log(carsArray[i]);
// }

// let myCars = function (value) {
//   console.log(value);
// };
// forEach() function can also be used
// console.log(carsArray.forEach(myCars));

// adding elements using push() method
// carsArray.push("Volkswagen");
// console.log(carsArray);

// associative arrays - these are arrays with named indexes. js does not support assosiative arrays.
// arrays us numbered indexes only

// How to recognizae an array
// solution 1
// console.log(Array.isArray(carsArray)); //use Array.isArray method

// solutiopn 2
// create your own isArray function
// function isArray(x) {
//   return x.constructor.toString().indexOf("Array") > -1;
// }
// console.log(isArray(carsArray)); //true

// solution3
// use instanceof operator. returns true if an object is created by a given constructor

// console.log(carsArray instanceof Array); //true

/**ARRAY METHODS */
// Array to strings using toString()
// console.log(carsArray.toString());
// join() also joins arrays into a string but unlike toString() you can specifies the separator

// console.log(carsArray.join(" "));

// POPPING AND PUSHING
// pop() removes the last element from an array. returns the popped item
// let popped = carsArray.pop();
// console.log(carsArray);
// console.log(popped);

// push() method adds a new element to an array at th end
// carsArray.push("toyota");
// console.log(carsArray);

// shift() is similar to pop() but works with th first element
// let shifted = carsArray.shift();
// console.log(carsArray);
// console.log(shifted);

// unshift() method adds a new element to an array at the beggining
// carsArray.unshift("Volvo");
// console.log(carsArray);

// CHANGING ELEMENTS
// carsArray[0] = "Mazda"; //changes the first element of the array to Mazda
// carsArray[carsArray.length] = "Bugatti"; //provides an easy way to append elements to an array
// console.log(carsArray);

// deteting elements
// delete operator can be used to delete elements of an array
// delete carsArray[0];
// console.log(carsArray); //leaves undfined in arrays. Use pop() or shift() instead

// SPLICING AN ARRAY
// splicing adds new elements to an array
// carsArray.splice(2, 0, "probox", "Wish"); //2 indicates the position where the element is to placed
// 0 indicates how many elements should be removed
// console.log(carsArray);

// splice() also returns an array of deleted items
// let spliced = carsArray.splice(2, 2, "Lancruiser", "Prado");
// console.log(carsArray);
// console.log(spliced); //returns an array of deleted items

// splice() can be used to remove elements from an array.
// let removed = carsArray.splice(0, 1);
// console.log(removed);

// MERGING ARRAYS
// concat() creates new array by merging existing arrays
// concat() always returns a new array.
// it can take any number of array arguments
// can take values as arguments
// const bigVehicles = ["Busses", "Lorries", "trucks"];
// const smallVehicles = ["cars", "tukTuks"];
// const othermotors = ["motorbikes", "bicycles"];
// const vehicles = bigVehicles.concat(smallVehicles, othermotors, [
//   "wheelbarows",
//   "tires",
// ]);
// console.log(vehicles);

// SLICING AN ARRAY
// slice() method slices a piece of an array into a new array
// slice() creats a nwe array. it does not remove any element from the source array
// slice can take two arguments
// console.log(carsArray);
// let sliced = carsArray.slice(2);
// sliced = carsArray.slice(1, 4); //selects elements from the start arguiument. The end is not included in the slice.
// console.log(sliced);

// Automatic toString()-
// js automatically converts an array to comma sepated string when a primitive value is expected
// all js objects have a toString() method

// SORTING ARRAYS
// sort() sorts an array alphabetically
// reverse() reverses an array elements. descending order

// carsArray.sort();
// carsArray.reverse();
// console.log(carsArray);
// numeric sorting with sort() produces incorrect values
// compare function is used to fix this issue
// compare fucntion compares all elements of an aray one element at a time
const numbers = [20, 67, 40, 53, 19, 100];
// numbers.sort(function (a, b) {
//   return a - b;
// });

// sorting an array in random order
// numbers.sort(function (a, b) {
//   return 0.5 - Math.random();
// });
// console.log(numbers);

/**ARRAY ITERATION
 *
 *
 */
// forEach()- calls a function once for each array element
carsArray.forEach(myFunc);
function myFunc(value) {
  console.log(value);
}

// map()- this creates a new array by performing a function on each array element
// doesnt change the original array
// // doesnt execute the function without values
// function mapFunc(value) {
//   return value;
// }
// let carsArray2 = carsArray.map(mapFunc);
// console.log("Vehicle ", carsArray2);

// let numbers2 = numbers.map(myNumberFunc);
// function myNumberFunc(value) {
//   return value * 2;
// }
// console.log(numbers2);

// filter()-creates a new array with array elements that passes a test
// numbers2 = numbers.filter(GreaterNo);
// function GreaterNo(value) {
//   return value > 98;
// }
// console.log(numbers2);

// reduce()- runs a function on each array element to produce a single value
// works from left to right
// does not reduce the original array
// the following code finds the sum of all elements of an arraY
// IT CAN ALSO ACCEPTR AN INITIAL VALUE

let numbers2 = numbers.reduce(ReduceFunc);
function ReduceFunc(total, value) {
  return total + value;
}

console.log(numbers2);

// reduceRight()-similar to reduce() buyt works from right to left

// every()-checks if all values pass a test
numbers2 = numbers.every(EveryPass);
function EveryPass(value) {
  return value > 100;
}
console.log(numbers2); //prints false
