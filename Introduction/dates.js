// date objects lets us work with dates
// js uses the browsers time zone and display date as full text

// creating date objects using new Date()
// new Date()-creates a new date object with current date and time
// new Date(year, month, day, hours, minutes, seconds, milliseconds)-creates a new date with specified date and time
// new Date(dateString);

// console.log(new Date());
// date objectrs are static
// console.log(new Date(2019, 8, 20, 10, 33, 30, 0)); //javascript counts months from 0-11
// on the above, you cannot suppy one parameter. it wilkl be treated as millisecond
// console.log(new Date(99, 11, 12));

// dateStrings
// console.log(new Date(" October 13, 2022 11:13:00"));

// JAVASCRIPT STORES DATES AS MILLISECONDS

// DATE METHODS

//DISPLAYING DATES
// automatically converted to string by toString() method in HTML
// toUTCString() converts a date to a UTC string
// toDateString() converts a date to a more readable format
// let d = new Date();
// document.getElementById("demo").innerHTML = d.toDateString();

// DATE FORMATS
// INPUT FORMATS, ISO, SHORT DATE, LONG DATE
// ISO-YYYY-MM-DD IS THE PREFERRED
// console.log(new Date("2022-03-14"));

//short dates ARE WRITYTEN IN MM/DD/YYYY
// console.log(new Date("03/12/2020"));

// WARNINGS
/**
 * some broowsers, months or days with no leading zeroes may profuce an error
 * behaviuor of YYYY/MM/DD undefined
 * behaviuor of DD/MM/YYYY is also undefined.
 */

// LONG DATES
// written with a MMM DD YYYY
// console.log(new Date("Mar 25 2015"));
// month can be abbreviated
// commas are ignored

// parsing dates
// Date.parse() method is used to convert a valid date string to milliseconds

// let msec = Date.parse("March 21, 2022");
// d = new Date(msec);
// console.log(d);

// GET DATE METHODS-used to get information from date objects
// getTime()-returns the no of ms since jan 1 1970
// getFullYear()-returns year of a date as a four digit no
// getMonth()-returns month of a date as a no(0-11)
// getDate()-returns the day of a date as a number(1-31)
// getHours,getMinutes,getSeconds, getMilliseconds,getDay()
// let d = new Date();
// let months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
// console.log(d.getTime());
// console.log(d.getFullYear());
// console.log(months[d.getMonth()]); //use months array to display names as shown
// console.log(d.getDate());
// console.log(days[d.getDay()]); //getDay() returs the weekdays as numbers from 0-6

// SET DATE METHODS-used to set date values for a date object
// setFullYear() sets the year of a date object. can alkslo set month and day
// setMonth()sets the months of a date object
// setDate() can also be used to add days to a date
// setHours
// setMinutes
// setSeconds
// dates can also be compared
let d = new Date();
d.setFullYear(2020);
d.setMonth(11); //dec
d.setDate(23); //23
d.setDate(d.getDate() + 54); //shifting od months and years are handled automatically

console.log(d);
