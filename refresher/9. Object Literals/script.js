// common data structure that holds key/value pairs
let x;
// const person = {
//   name: "John",
//   age: 20,
//   isAdmin: true,
//   address: {
//     street: "Ruaraka",
//     state: "Nairobi",
//   },
//   hobbies: ["music", "jogging"],
// };

// x = person.name;
// x = person["name"];
// x = person.hobbies[1];

// x = person.name = "John Doe";

// delete person.age;

// person.greet = function () {
//   console.log("Hello there peop0le");
// };

// x = person.greet();
// console.log(x);

// objects spread and methods
const todo = new Object();

todo.id = 1;
todo.name = "Buy milk";
todo.completed = false;

x = todo;

// nesting objects
const person = {
  address: {
    cords: {
      lat: 2325425,
      long: 6537839,
    },
  },
};

x = person.address.cords.lat;

// spread

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 }; //spread obj1 and obj2 inside obj3

// object method assign works similar to spread operator
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  {
    id: 1,
    name: "Bwire",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Cynthia",
  },
]; //an array of objects

// object methods
x = Object.keys(todo); //keys of todo in an array

x = Object.keys(todo).length; //get legth of object using its keys
x = Object.values(todo);
x = Object.entries(todo); //an array of key value pairs

x = todo.hasOwnProperty("name"); //check if an object has the specified property
console.log(x);
