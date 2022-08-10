/**Regular expressions
 * sequence of characters that form a search patterns
 * syntax= /pattern/modifier
 * uses string methods; search() and replace() methods
 * can make your seaarch more powerful
 *
 * MODIFIERS
 * i-CASE SENSITIVE MATCHING
 * g-perform a global match
 * m-perform multiline matching
 *
 * RegExp objects has predefined methods
 * test()-methods that searches a string then returns true/false
 *
 *exec() searches a string for a specified pattern and returns the found text as an object
 if not found, it returns an empty(null)object
 *
 */
const site = "this site w3schools is a good one";
console.log(site.search(/w3schools/i));
const tester = /[a-z]/;
console.log(tester.test(site)); //prints true
