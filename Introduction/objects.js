/**Objects
 * these are containers for named valuyes called properties or methods
 */
// exaample of an object
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
//this keyword refers to the owner oif the function. person object owns the function age

// Accessing the object values using (.) or []
console.log(person["details"]());
// object can also have methods
// methods are actions that can be perfomed on objects. stored as function definitions
