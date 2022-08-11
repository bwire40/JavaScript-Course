"use strict";
// shorter function syntax
// before
let hello = function () {
  return "Hello World";
};

// after
var newHello = () => {
  return "hello World";
};
// there is no need for return if the function has a single statement
newHello = () => {
  "Hello";
};
