/**
 * try-trest a block for errors
 * catch-handles errors
 * throw-lets you create custom errors
 * finally-executes code after try catch irregardless of the results
 *
 */

// try {
//   //block of code
//   addlert("Hello");
// } catch (err) {
//   //block of ciode
//   alert("An error occured");
// }

// using throw
function checkErrors(x) {
  let answer; //local variable.
  try {
    if (x === "") {
      throw "Value is empty";
    } else if (x < 0) {
      throw "Cannot Have negative values";
    } else if (isNaN(x) === true) {
      throw "Value should be a number";
    } else {
      answer = x * x;
      //   console.log(answer);
    }
  } catch (err) {
    //block of code
    alert(err.name);
  } finally {
    //executed irregadless of the results
    console.log("Keep going bro!");
  }
  return answer;
}

console.log(checkErrors(10));
