// myname = "Emmanuel Bwire"; //this is a string
// using string literals
// myDesc = `My name is emmanuel bwire. i am good at coding.`;
// console.log(typeof myDesc); prints string

// length of the strings using length property
// console.log(myDesc.length); //48

// Escape characters can be used to format strings
/**
 * \',\",\b,\\,\t,\v
 */
// myDesc = "\'Hey There\', Shouted Kimotho";
// console.log(myDesc);
// strings can also be objects. this is if they are defined with new keyword.
// myname = new String("Bwire");
// console.log(typeof myname); //shows object
// Do not create sttrings as objects. slows down excetuin speed.
// Objects cannot be compared
// hisName = new String("Bwire");
// console.log(myname == hisName); //prints false since they are different objects

/**String methods
 * length
 * indexOf()-returns the index of the first occurence of a specified text in a string
 * lastIndexOf()-returns the lkast occurence os the specified text
 *      if text is no0t fopund they print -1
 *search()-searches a string for a specified value and returns its position.

 search and indexOf look similar but have the following differences
    /**
     * search cannot take the second start position argument
     * indexOf cannot take powerfui search values(regular expressions)
//      */
// console.log(myDesc.length); // 47
// console.log(myDesc.indexOf("emmanuel")); // 11
// console.log(myDesc.lastIndexOf("schoolk")); // -1
// console.log(myDesc.search("emmanuel")); // -1

/**
 * Extracting string parts
 * slice(start,end) - extracts part of a string and returns the extracted part in a new string
 * substring(start,end) - similar to slice but it does not accept negative indexes
 * substr(start, length) - similar to slice but the second parameter showws the length of the extracted part
 * if you ommit the second parameter, the remaining part will be slicced
 * if the first parameter is negative, the position startsx form the end of the string
 */
// newDesc = myDesc.substr(11);
// newDesc = myDesc.substring(-26, -11); //displays <empty string>
// console.log(newDesc);

/** Replacing String COntent
 * replace()- replaces a value with another value.
 * replac() only replaces the first match. use regular expression /g to change alol instances
 * replace() is also case sensitive. Use a regular expression with an /i
 */
// str = "Please visit microsoft and microsoft";
// newStr = str.replace("microsoft", "Apple");
// changeall = str.replace(/microsoft/g, "Microsoft"); //replaces all
// newDesc = myDesc.replace("emmanuel", "Anthony");
// console.log(changeall);

/**Lower and upper case
 * touppercase()-converts to upper caase
 * tolowercase()-converts to lower case
 */
// console.log(myDesc.toUpperCase());
// console.log(myDesc.toLowerCase());

// concat() method joins two or more strings
// firstName = "Emmanuel";
// lastName = "Bwire";
// fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// strings are immutable, cant be changed or replaced. above changes are made on new strings.

//trim()-removes white spaces from both sides of the string
// console.log(myDesc.trim());

/**Extracting string characters
 * charAt(position)-returns the charater at a specifiedindex in a string
 * charCodeAt(position)-returns the unicoide of the character at a specified index in a string
 * property access[]-allows property access on strings similar to arrays
 *    makes strings look like arrays but they are not
 *    it is read only
 */
// console.log(firstName.charAt(0)); //E
// console.log(firstName.charCodeAt(0)); //69
// console.log(firstName[0]); //E
// str = "hello";
// str[4] = "l"; // does not work even if the error is not showing
// console.log(str);
// converting strings into arrays
//use the split() method
// txt = "a,b,c,d,e";
// firstName = firstName.split("");
// txtSplit = txt.split(",");
// txt.split("|");
// txt.split(" ");
// console.log(typeof txtSplit); //object type which is true since arrays are objects
// console.log(firstName[0]); //E

/** NUMBERS IN JS
 *
 * floating type numbers
 * js numbers are always 64 bit floating point
 * a string + number = string
 */
// floating point arithmetic is not always 100% accurate
// num1 = 0.2;
// num2 = 0.1;
// console.log(num1 + num2); //produces 0.30000000000000004

// javascript strings can have numeric content
// num1 = "100";
// num2 = "10";
// console.log(num1 + num2); //prints 10010 since + is used for concatenation in strings

// num1 = "100";
// num2 = "10";
// console.log(num1 * num2); // prints 1000. Jsa converts tries to convert the strings to numeric type before perfoirming computations.

// NaN is a JS reserved keyword that indicates a numkber is not a legal number
// num1 = 100 / "Jane"; //num1 will be a NaN.
// if the string is however a number, the result will be a number
// num1 = 100 / "10"; //prints 10
// console.log(num1);

// isNaN() can be used to find is a value is a number
// num1 = 100 / "tonnety";
// console.log(isNaN(num1)); //prints true since the result of num1 is not a number

// NaN is of type number
// Infinity OR (-Infinity) is retuirned if you calculate a number outside the
// largets possible number
// num1 = 2;
// while (num1 != Infinity) {
//   newnum = num1 * num1;
//   console.log(newnum);
// }

// console.log(num1 / 0); //prints infinity

// Infinity is  type of number
// console.log(typeof Infinity); //prints number

// Never write a number with a leading zero(07). JSW interprets this as octal;
// Numbers can be objects
// num2 = new Number(2);
// console.log(typeof num2); //prints object

/**Number Methods
 *  toString()- returns a number as a string
 *  toExponential()-returns a string, with a number rounded and written using exponential notation
 *  toFixed()-returns a string with the number written with the specified no of decimals
 *  toPrecision()-returns a string with  Number written with a specifies length
 *  valueOf()-returns a number as a number
 */
// x = 12;
// y = x.toString();
// y = x.toExponential(2); //string. The parameter is optional.
// console.log(y); //1.20e+1
// console.log(typeof y); //prints string

// x = 12.566767;
// y = x.toFixed(3);
// y = x.toPrecision(2); //rounds off x
// console.log(y); //12.560. type string
// toFixed(2) is perfect for working with money

// x = 23;
// y = x.valueOf();
// console.log(y); //returens 23+
// valueOf() is used to convert object type numbers to primitive types
// All JS data types have valueOf and toString() methods

/**CONVERTING VARIABLES TO NUMBERS
 *
 * 3 METHODS
 *
 *    Number()
 *       used to convert JS variables to numbers
 *       NaN is returned if the number cannot be converted
 *    parseInt()
 *       parses a string and returns a whole number. spaces allowed. fisrt number is returned.
 *       If the valkue cannot be converted, ti prints NaN
 *    parseFloat()
 *       parse a string and returns a number. spaces allowed. First number returned.
 *
 * This methods are not number methods but global JS methods
 */
// console.log(Number("10")); //prints 10
// console.log(Number("10.334")); //prints 10.334
// console.log(Number("10,45")); //prints NaN
// console.log(Number("10 45")); //prints NaN
// console.log(Number("John")); //prints NaN

// Number()_ can also be used on dates
// console.log(Number(new Date())); //this returns the number of milliseconds

// console.log(parseInt("10")); //10
// console.log(parseInt("10.34")); //10
// console.log(parseInt("10 20 30")); //10
// console.log(parseInt("Years 10")); //NaN

// console.log(parseFloat("10")); //10
// console.log(parseFloat("10.33")); //10.33
// console.log(parseFloat("10 20 39")); //10
// console.log(parseFloat("10 YEARS")); //10
// console.log(parseFloat("Years 10")); //NaN

/**Number Properties
 *
 * MAX_VALUE
 * MIN_VALUE
 * POSITIVE_INFINITY
 * NEGATIVE_INFINITY
 * NaN
 */
