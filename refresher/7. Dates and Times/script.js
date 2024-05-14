//  dates and times
// let d;

// d = new Date();
// d = d.toString();
// d = new Date(2021, 6, 10, 12, 34, 0);
// d = new Date("2021-07-10T12:30:00");
// d = new Date("07/02/2021 12:30:00");

// // timestamps
// d = Date.now(); // mili-seconds elapsed

// d = new Date("07-02-2021 12:30:00");
// d = d.getTime();
// d = d.valueOf();

// d = new Date(455623456788);

// d = Math.floor(Date.now() / 1000);

// console.log(d);

//methods on date object

let x;

let d = new Date();

x = d.toDateString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth(); //month return number which is zero based
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth()}`;

x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB").format(d);
x = Intl.DateTimeFormat("default").format(d);

x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

x = d.toLocaleDateString("dafault", { month: "long" });

console.log(x);
