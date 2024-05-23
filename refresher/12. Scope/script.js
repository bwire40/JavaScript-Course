// global-can be accessed anywhere in the program
// function scope, can only be accesed inside the function
const x = 30; // global

function add() {
  const x = 20; //this is overring (variable shadowing) the global x above
  const y = 50; //function scope. cannot be accessed outside the funtion
  console.log(y);
  //   console.log(x + y);
}
add();

// block level scope
const z = 100;
if (true) {
  const y = 200;
  //   console.log(x + y);
}

// block level scope
for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

// console.log(i); //i is not defined since it can only be accessed in the for loop block

// var vs let

if (true) {
  const a = 500;
  let b = 200;
  var c = 300; //var is not block scoped hence will print 300
}

function run() {
  var d = 100;
  //   console.log(d);
}

// console.log(a, b, c);
// console.log(d); //not defined since var is function scoped

// nested scope

// you can only access the parent from within the child
function first() {
  const x = 100;

  function second() {
    const y = 200;
    // console.log(x + y);
  }

  second();
}

first();

// function expression
const addPlus = function (value) {
  return "+" + value;
};

// arrow functions
const sub = (a, b) => {
  return a + b;
};

// implici return
const addArrao = (a, b) => {
  a + b;
};

addArrao(2, 3);
