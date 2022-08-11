//JAVASCRIPT HOISTING
// this is the behaviour of moving declarations to the top
/**
 * in js a variable can be declared after it has been used
 */
x = 5; //undeclared variable
console.log(x);

// let and const are not hosted
// initializations are not hoisted. js hoists only declarations
// DECLARE VARIABLES AT THE TOP

// STRICT MODE
// "use strict" definces that javascript code be used in strict mode

// THIS KEYWORD
// this referes to the object it belongs to
// this in a method refers to the "owner" of the method
// this alone is a global object. [object window]
// this in a function, the owner of the function is the defalut binding fro this. [object window].undefined in strict mode
// in event handlers, this refers to the HTML element that received the event5

let person = {
  firstName: "Emmanuel",
  lastName: "Bwire",
  fullName: function () {
    return `${this.fullName} ${this.lastName}`;
  },
};
console.log(person.fullName);

// explicit function binding
// call() and apply() call an object method with another object as argument
