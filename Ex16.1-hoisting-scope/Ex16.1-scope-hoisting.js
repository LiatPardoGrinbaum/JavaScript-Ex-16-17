/* Without running the code below, explain in your own words what the result
of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix them. */

//block 1

function funcA() {
  console.log(a); // => a is undefined because *var a* is hoisted but declared later.
  console.log(foo()); // => will print - 2, because function declaration is hoisted.
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA(); // will print undefined and 2 because foo() is invoked inside and console.log 2

// Block 2

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
//=>"Aurelio De Rosa" print this- inside where thr function sits- the prop object

var test = obj.prop.getFullName;

console.log(test());
//=> "John Doe" prints this- inside global scope (won't work on node.js, will work on  browser console).

//*this* represents the scope where the function is

// block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a); // undefined. a haven't been declared in glocal scope.
console.log(typeof b); // b is global (wasn't initialized with const, var or let), so it equals 0 which is tyopeof number.

//block 4
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();
// first pahse is to pass on any line from top to bottom, and because its function declaration it saved any of it content, so it saved the last consol.log("2") which override the first one. then it runs it all so the result is 2 , 2.

//block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); // d is flobal so it will log to the console - 1.
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); // will log error because e is scoped to the function and can't be accessed outside.

//block 6

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); // will log undefined because it saved the name but not the value (var has hoisting)
var f = 1;
funcE(); // will log f as 1 because function invoked after value assignment.
