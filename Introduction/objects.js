"use strict";
/**Objects
 * these are containers for named values called properties or methods
 */
// example of an object
const person = {
  firstname: "Emmanuel",
  lastname: "",
  eyeColor: "blue",
  age: function (currentYear, birthYear) {
    return currentYear - birthYear;
  },
  details: function () {
    return `${this.firstname} ${this.lastname}. Eye Color: ${this.eyeColor}.
    Age: ${this.age(2022, 1999)}.`;
  },
  get eye_Color() {
    return this.eyeColor;
  },
  set last_name(x) {
    this.lastname = x;
  },
};
//this keyword refers to the owner of the function. person object owns the function age

// Accessing the object values using (.) or [] or [expression]
// x = "lastname";
// console.log(person["details"]()); // using []
// console.log(person.firstname); //using .
// console.log(person[x]); //expression
// object can also have methods
// methods are actions that can be perfomed on objects. stored as function definitions

// looping through objects
// for...in loop
// for (x in person) {
//   console.log(person[x]);
// }

// add new properties
// person.bestFriend = "Jesus";
// // console.log(person.bestFriend);
// // deleting properties using delete keyword
// delete person.bestFriend;
// console.log(person.bestFriend); //undefined

// object methods
// getter method using get keyword and setter method usign set keyword
console.log(person.eye_Color);
person.last_name = "Bwire";
console.log(person.lastname);

// Js can secure better data quality when using getters and setters
// Object.defineProperty() can also be used to add getters and setters

// OBJECT CONSTRUCTORS
// constructor function
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.P_age = age;
  this.eyeColor = eye;
}
// calliing the constructor functions
const person1 = new Person("Emmanuel", "Bwire", 24, "Blue");

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
// console.log(Person);
// adding a method to the object
// person1.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };
// console.log(person1.firstName);
// console.log(person1.fullName());

// to add new properties and methods to an existing object constructro use the prototype property.

// ES5 OBJECT METHODS
// change a property using Object.defineProperty(object,prperty,descriptor)
Object.defineProperty(person, "firstname", { value: "Antony" });
// adding a property
Object.defineProperty(person, "language", { value: "Eng" });
//adding getters and setters
Object.defineProperty(person, "fullSent", {
  get: function () {
    return `${this.firstname} ${this.lastname} has ${this.eyeColor} eyes.`;
  },
});

console.log(person.fullSent);
