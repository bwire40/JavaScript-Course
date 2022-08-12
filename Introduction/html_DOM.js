"use strict";
// DOM DOCUMENT OBJECT MODEL
// With this javascrip can perform the following
/**
 * change all html elemennts in the page
 * change html attributes
 * chage css styles
 * remove existing html elements and attributes
 * react to all existing html events
 * create new events in a page
 */

// DOM is a W3C (world wide web consortium) standard
// defines a standard for accessing documents
// DOM standard is divided into
/**
 * core DOM-for all document types
 * XML DOM-xml documents
 * HTML DOM for html documents
 */
/**HTML DOM
 * objcets model and programming interfaces fior html
 * defines elements as objects
 * defienes the properties of all html elements
 * defines the events for all HTML elements
 */

/**DOM methods
 *
 * these are actions that can be performes
 */
// document.getElementById("demo").innerHTML = "I am Working on DOM!";
// getElementById is a method while innerHTML is a property
// id="demo was used toi find the element p
// innerHTML is used for getting or replacing the content of html elements

// HTML DOM Document
// // the document reps your webpage

// let url = document.URL;
// console.log(url);

// HTML DOM elements
/**
 * finding html elements usign the following methods
 * by id
 * by tagname
 * by class name
 * by css selectors
 * by html object collections
 */
let p1 = document.getElementById("demo"); //returns the elements as an object
// using the tagname
let p2 = document.getElementsByTagName("p");
// using class name
let main = document.getElementsByClassName("container");
// using css selectors
let ps = document.querySelectorAll("p.demo");

// using Html Object collections
// document.getElementById("tryBtn").addEventListener("click", "myFunction()");

function myFunction() {
  let frm = document.forms["frm1"];
  let count = 0;
  let text = "";
  //   console.log(frm);
  for (; count < frm.length; count++) {
    text += `${frm.elements[count].value} ${"<br>"}`;
  }
  document.getElementById("demo").innerHTML = text;
}

// console.log(p1.innerHTML); //hello there
// console.log(p2[0].innerHTML); //hello there
// console.log(main[0].innerHTML); //the first element in the container
// console.log(ps[1].innerHTML);

// Changing HTML
// document.write can be used to write directly to the page
// let d = new Date();
// document.write(d);
// document .l write overites the document
// use innerHTML to change html content or add

// document.getElementById("demo").innerHTML = "Hey I just changed";
// document.getElementById("oldH1").innerHTML = "Content Test Area";

// changing the value of the htmlo attribuesd
// document.getElementById().attribute="new atrr"
// document.getElementById("image").src = "images/yellow hphones.jpg";

// changing CSS
// document.getElementById(id).style.property=new style
// document.getElementById("oldH1").style.color = "red"; //color changes to red
// document.getElementById("demo").style.display = "none";//makes an element invisible

// Animations
