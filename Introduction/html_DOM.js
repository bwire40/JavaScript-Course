// "use strict";
// // DOM DOCUMENT OBJECT MODEL
// // With this javascrip can perform the following
// /**
//  * change all html elemennts in the page
//  * change html attributes
//  * chage css styles
//  * remove existing html elements and attributes
//  * react to all existing html events
//  * create new events in a page
//  */

// // DOM is a W3C (world wide web consortium) standard
// // defines a standard for accessing documents
// // DOM standard is divided into
// /**
//  * core DOM-for all document types
//  * XML DOM-xml documents
//  * HTML DOM for html documents
//  */
// /**HTML DOM
//  * objcets model and programming interfaces fior html
//  * defines elements as objects
//  * defienes the properties of all html elements
//  * defines the events for all HTML elements
//  */

// /**DOM methods
//  *
//  * these are actions that can be performes
//  */
// // document.getElementById("demo").innerHTML = "I am Working on DOM!";
// // getElementById is a method while innerHTML is a property
// // id="demo was used toi find the element p
// // innerHTML is used for getting or replacing the content of html elements

// // HTML DOM Document
// // // the document reps your webpage

// // let url = document.URL;
// // console.log(url);

// // HTML DOM elements
// /**
//  * finding html elements usign the following methods
//  * by id
//  * by tagname
//  * by class name
//  * by css selectors
//  * by html object collections
// //  */
// // let p1 = document.getElementById("demo"); //returns the elements as an object
// // // using the tagname
// // let p2 = document.getElementsByTagName("p");
// // // using class name
// // let main = document.getElementsByClassName("container");
// // // using css selectors
// // let ps = document.querySelectorAll("p.demo");

// // // using Html Object collections
// // // document.getElementById("tryBtn").addEventListener("click", "myFunction()");

// // function myFunction() {
// //   let frm = document.forms["frm1"];
// //   let count = 0;
// //   let text = "";
// //   //   console.log(frm);
// //   for (; count < frm.length; count++) {
// //     text += `${frm.elements[count].value} ${"<br>"}`;
// //   }
// //   document.getElementById("demo").innerHTML = text;
// // }

// // console.log(p1.innerHTML); //hello there
// // console.log(p2[0].innerHTML); //hello there
// // console.log(main[0].innerHTML); //the first element in the container
// // console.log(ps[1].innerHTML);

// // Changing HTML
// // document.write can be used to write directly to the page
// // let d = new Date();
// // document.write(d);
// // document .l write overites the document
// // use innerHTML to change html content or add

// // document.getElementById("demo").innerHTML = "Hey I just changed";
// // document.getElementById("oldH1").innerHTML = "Content Test Area";

// // changing the value of the htmlo attribuesd
// // document.getElementById().attribute="new atrr"
// // document.getElementById("image").src = "images/yellow hphones.jpg";

// // changing CSS
// // document.getElementById(id).style.property=new style
// // document.getElementById("oldH1").style.color = "red"; //color changes to red
// // document.getElementById("demo").style.display = "none";//makes an element invisible

// // HTML DOM Events
// /**
//  * mouse click
//  * page loading
//  * image loading
//  * mouse hover
//  * input field changed
//  * form submitted
//  * keystroking
//  */
// // event attributes
// // onclick(),onload()
// // onclicking the current image, the following image is added
// // function changeImg() {
// //   document.getElementById("image").src = "images/yellow hphones.jpg";
// // }
// // function displayDate() {
// //   let date = new Date();
// //   document.getElementById(
// //     "date-p"
// //   ).innerHTML = `Today's Date is: ${date.toDateString()}`;
// // }
// // you can also assing events using html dom in js
// // document.getElementById("date-btn").onclick = displayDate;
// // onload and onunload
// // check cookies on load
// // function checkCookies() {
// //   let text = "";
// //   if (navigator.cookieEnabled === true) {
// //     text = `Cookies are enabled.`;
// //   } else {
// //     text = `Cookies are not enabled.`;
// //   }
// //   alert(text);
// // }

// // onchange event often used in combination with validation of input fields
// // document.getElementById("Fname").onchange = upperCase;
// // function upperCase() {
// //   let fname = document.getElementById("Fname");
// //   fname.value = fname.value.toUpperCase();
// // }
// // let number = document.getElementById("number").value;
// // number = Number(number); //converting the string to type number
// // // console.log(typeof number);
// // document.getElementById("image").onmouseover = enlarge;
// // document.getElementById("image").onmouseout = shrink;
// // function enlarge() {
// //   document.getElementById("image").style.transform = "scale(1.2)";
// // }
// // function shrink() {
// //   document.getElementById("image").style.transform = "none";
// // }

// // // onfocus
// // let x = document.getElementById("Fname");
// // x.onfocus = changeBack;
// // // x.onmouseout = revert;
// // function changeBack() {
// //   x.style.background = "red";
// //   x.style.border = "1px solid green";
// // }
// // function revert() {
// //   x.style.background = "white";
// // }

// // DOM Event Listener
// // addEvenListener
// /**you can add many event handelers to anoe element
//  *
//  */

// document.getElementById("btn-event").addEventListener("click", displayAlert);
// document.getElementById("btn-event").addEventListener("mouseover", changeBack);
// document
//   .getElementById("btn-event")
//   .addEventListener("mouseout", changeBackback);
// function displayAlert() {
//   alert("Hello There");
// }
// function changeBack() {
//   document.getElementById("btn-event").style.background = "green";
//   document.getElementById("btn-event").style.color = "white";
// }
// function changeBackback() {
//   document.getElementById("btn-event").style.background = "white";
//   document.getElementById("btn-event").style.color = "black";
// }

// // when passing parameter values, use an anonymous function that calls the specified function with the parameters
// /**
//  * event bubbling -inner most element event is handeld first and then the outer
//  * event capturing-the outer most elemtn is handled fiorst then the inner ones last
//  * addEvenListener(event,function,useCapture)
//  * useCapture is either true or false
//  * true means capturing
//  * false means bubbling
//  *
//  * removeEventListener90 METHOD REMOVES event handlers that have ben attached with the listener method
//  * element.removeEventListener(event,function)
//  */
