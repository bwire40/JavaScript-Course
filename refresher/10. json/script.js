const post = {
  title: "Post one",
  body: "this is a body",
};

// convert to json
let str = JSON.stringify(post);

// parse json

const obj = JSON.parse(str);

const post2 = [
  {
    title: "Post one",
    body: "this is a body",
  },
  {
    title: "Post one",
    body: "this is a body",
  },
];

str = JSON.stringify(post2);

console.log(str);

// challenge
let libraries = [
  {
    title: "The Game",
    author: "John doe",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: " Game development",
    author: "John carys",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "loving birds",
    author: "ryan",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
let x;
x = libraries[0].status.read = true;
x = libraries[1].status.read = true;
x = libraries[2].status.read = true;

// destructuring
let [{ title: firstTitle, ...rest }] = libraries;
firstTitle = "firstBook";

// change to json
const strJson = JSON.stringify(libraries);
console.log(strJson);
console.log(firstTitle);
console.log(x);
console.log(libraries);
