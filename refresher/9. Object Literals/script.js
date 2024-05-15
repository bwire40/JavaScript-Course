// common data structure that holds key/value pairs
let x;
const person = {
  name: "John",
  age: 20,
  isAdmin: true,
  address: {
    street: "Ruaraka",
    state: "Nairobi",
  },
  hobbies: ["music", "jogging"],
};

x = person.name;
x = person["name"];
x = person.hobbies[1];

x = person.name = "John Doe";

delete person.age;

person.greet = function () {
  console.log("Hello there peop0le");
};

x = person.greet();
console.log(x);

// objects spred and methods
