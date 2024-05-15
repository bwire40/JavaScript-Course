const firstName = "john";
const lastName = "jUma";
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

// destructring

const todo = {
  id: 1,
  title: "take the trash",
  user: {
    name: "user2",
  },
};

const {
  id: todoId, //renaming
  title,
  user: { name },
} = todo; // destructuring

// destructure arrays
const numbers = [23, 44, 56, 7, 8];
const [first, second, ...rest] = numbers; //rest contains an array of the remaining elements in the array

console.log(first, second, rest);
