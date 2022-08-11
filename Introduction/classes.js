"use strict";
// CLASSESS
// this is a type of fucntionm that uses keyword cless to iniitate it
// properties are assigned inside a constructor() method
// everytime a class object is initialized, the constructor method is called
// EVERY CLASS HAS A CONSTRUCTOR METHOD. IF YOU DONT HAVE ONE JAVASCRIPT ADD AN INIVISIBLE ONE FOR YOU

// DEFINITION
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
// }
// console.log(typeof Car); //prints function as typ[e of class

// CREATE OBJECTS
// const myCar = new Car("Ford");
// const mySecCar = new Car("Volks");
// note that the constructor method is called automatically when the object is initialized
// console.log(mySecCar.carname);
// you can also make your own constructor methods

//METHODS
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   // custom method
//   present(x) {
//     return `${x} I have a ${this.carname}`;
//   }
// }
// const myCar = new Car("Ford");
// console.log(myCar.present("Hello,"));
// the methods can also have parameters as shown above

// STATIC METHODS
// this are defined on the class itself and not on the prototype.
// this means you cannot call a static method on the object (mycar) but on the class (car)

// class Person {
//   constructor(p_name) {
//     this.personName = p_name;
//   }
//   hello() {
//     return `Hello ${this.personName}.`;
//   }
// }

// const person1 = new Person("John");
// console.log(Person.hello(person1)); //static method called on the class iteself not object person1

// you can aslo use the person1 object inside the static method as shown above

// INHERITANCE
// to create a class inheritance we use the keyword extends
// class Gender extends Person {
//   constructor(p_name, gender) {
//     super(p_name); //super() refers to the parent class.
//     // by caling the super(0 method in the constructor we call the parents
//     // constructor method and get access to the parents properties and methoids
//     this.pGender = gender;
//   }
//   greet() {
//     return `${this.hello()}. i am ${this.pGender}`;
//   }
// }
// const person1 = new Gender("John", "Male");
// console.log(person1.greet());

// GETTERS AND SETTERS
// use get and set keywords
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  //   getter method
  get cname() {
    return this.carname;
  }
  set cname(x) {
    this.carname = x;
  }
}
const myCar = new Car("Ford");
// use setter to change the name from ford
myCar.carname = "Volvo";
// getter gets the name and prints on the console
console.log(myCar.carname);

// HOISTING
// class declarations are not hoiistd. Hence must be declared before use
