/**Objects
 * these are containers for named values called properties or methods
 */
// example of an object
person = {
  firstname: "Emmanuel",
  lastname: "Bwire",
  eyeColor: "blue",
  age: function (currentYear, birthYear) {
    return currentYear - birthYear;
  },
  details: function () {
    return `${this.firstname} ${this.lastname}. Eye Color: ${this.eyeColor}.
    Age: ${this.age(2022, 1999)}.`;
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
