// allows you to perform math tasks on numbers
// let num = 20.345;

// console.log(Math.round(num)); //Math.round() rounds off th number to 20
// console.log(Math.pow(num, 2)); //Math.pow(x,y) returns the value of x to the power of y
// console.log(Math.sqrt(num)); //Math.sqrt() returns the squar root
// console.log(Math.abs(num)); //returns the absolute positive number of the number

//Math.ceil() returns the value of x roiunded to the nearest interger
// console.log(Math.ceil(25.8));
//Math.floor() returns the value of x rounded down to the nearest interger
// console.log(Math.floor(25.8)); //25

// math.sin,Math.cos,Math.min,Math.max,Math.random,

// MATH.RANDOM()
// returns a random number btw 0-1
// console.log(Math.random()); //lower than 1
// can be used with .floor() to return random integers

// console.log(Math.floor(Math.random() * 10)); //0-9
// console.log(Math.floor(Math.random() * 10) + 1); //1-9

// a proper random function
function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRndInt(0, 9));
