/* Without running the code below, explain in your own words what the result
of each block of code will be and why. */

// Block 1
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
// firstResult equals otherFunction because it return that function;

var result = firstResult(2);
// 2 is the input of inner function (otherFunction) why is the result equals 5 and not 1???

// Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2(); // undefined because it returns nothing
console.log(a); // a equals 1 because it is a global varaible declared outside the function. it doesn't matter if it changes inside the function because it is scoped to it.

// block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i); //in the end of the loop i equals 2
  };
  setTimeout(log, 100);
}
