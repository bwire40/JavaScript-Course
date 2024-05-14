//  Array and objects

/**ARRAYS
 * are a special type of objects data structure in js that store multiple values
 * zero based hence accesed by indexes
 * surrounded in brackets, values are elements
 */
// let x;
// // array literal
// const numbers = [12, 3, 4, 32, 56, 6];
// // asrrays construicetor
// const fruits = new Array("apple", "mango");

// const mixed = [12, "fruit", true];

// // console.log(fruits);

// x = numbers[0];
// x = numbers.length;

// // change values
// fruits[2] = "pear";
// fruits[fruits.length] = "banana";
// x = fruits;

// console.log(x);

// array methods

let x;

// const numbers = [1, 2, 3, 4, 5, 5];

// // numbers.push(21); // add to the end of the array

// // numbers.pop(); //remove from the end

// // numbers.unshift(99); //add to the begining

// // numbers.shift(); //remove from the beggin

// // numbers.reverse(); //reverse the array

// // get from the array

// // x = numbers.includes(29); //false
// // x = numbers.indexOf(3);
// // x = numbers.slice(1, 5); //does not manipulate the actuasl array
// // // x = numbers.splice(1, 3); // changes the initial array
// // x = numbers.splice(3, 1); //remove a single element from the array. retuns 4

// // x = numbers.splice(1, 4).reverse().toString().charAt(0); //method chaining
// // console.log(x, numbers);

// // Nesting concat and spread operator
// const fruits = ["apple", "orange", "banana"];
// const berries = ["strawberries", "blueberries", "rasberry"];

// fruits.push(berries);
// x = fruits[3][1];

// // nest arrays
// const allFruits = [fruits, berries];
// x = allFruits;

// x = allFruits[1][0]; //acess from nested arrays

// // concat arrays
// x = fruits.concat(berries);

// //spread operator (...)
// x = [...fruits, ...berries];

// //flatten arrays

// const arr = [1, 2, 3, [3, 4, 5], [4, 5]];
// x = arr;

// x = arr.flat(); // no more nested arrays

// /// static methods on array objects

// x = Array.isArray("Hello"); //check of its an array
// x = Array.from("123455"); //creates an array from an iterable object

// const a = 1;
// const b = 2;
// const c = 3;
// const d = 45;

// x = Array.of(a, b, c, d);

// console.log(x);

// challenges
const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.reverse();
// arr.push(0);

arr.reverse();
arr.push(0);
arr.unshift(6);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//sln 1
x = [...arr1, ...arr2];
x.splice(4, 1);

//sln2
const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(x);
