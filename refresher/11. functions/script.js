function sayHello() {
  // fucntion body
  console.log("Hello World");
}

// call/run func
// sayHello();

// parameters - used when declaring/defining a function
function add(num1, num2) {
  console.log(num1 + num2);
}

// arguments are when passing in values when function invoking or calling
// add(2, 1);

function subtract(a, b) {
  return a - b;
}

const result = subtract(2, 3);
// console.log(result);
// console.log(subtract(20, 4));

// default parameters
function registerUser(user = "Bot") {
  //   if (!user) {
  //     user = "Bot";
  //   }
  return user + " is registered";
}

// console.log(registerUser());

// rest parameter to get unlimited numbers
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));

// objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user = {
  id: 1,
  name: "john",
};

console.log(loginUser(user));

// arrays as params

function getRand(arr) {
  // get random number from an array
  const randomIndex = Math.floor(Math.random() * arr.length); //generate a random index

  //   fetch the random value using the random index
  const item = arr[randomIndex];
  console.log(item);
}

getRand([20, 2, 3, 4, 56, 5, 6, 6, 11, 7, 8]);
