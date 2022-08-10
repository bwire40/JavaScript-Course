// Boolean() used to find out if an expression is true/false
// console.log(Boolean(5 > 2));

// everything with a value is True
// let a = 23;
// console.log(Boolean(a));
// everything without a value is false
// let b = 0; //null,-0,"",undefined,false,NaN are all falsey values
// console.log(Boolean(b));

// comarison and logical operators
/**
 * loose ==
 * strict ===
 * loose !=
 * strict !==
 * >
 * <
 * >=
 * <=
 * ? ternary operator
 *
 */

/**Logical operators
 * &&
 * ||
 * !
 */
// conditional ternary
// let = childName = "Mercy";
// let gender = childName === "Kevin" ? "Boy" : "girl";
// console.log(gender);

//CONDITIONS
// IF ELSE AND ELSE IF

let num = 23;

if (isNaN(num) === false) {
  console.log("COrrect number");
} else if (num > 20) {
  console.log("Greater than 20");
} else {
  console.log("Done");
}

// SWITCH STATEMENT
const count = 1;
switch (count) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  default:
    console.log("Done");
    break;
}
/**
 * if multiple cases match a case value, the first case is selected
 * if no matching case is found the program cointim=nues to the defaul label
 * if no default label is found, the program continues to the statements after the switch
 * switch uses strict comparion ===
 */
