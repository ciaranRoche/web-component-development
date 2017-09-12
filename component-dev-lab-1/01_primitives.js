/*
  Primitive data types in JS
*/
var foo1 = 5    // var means variable
var foo2 = 'Hello'
var foo3 = true  // not the string 'true'; foo3 is a boolean variable
var foo4 = null  // null is a keyword, just like var
console.log( foo1 + ' ' + foo2 + ' ' + foo3 + ' ' + foo4)
foo1 = 3    // change foo1 to be 3. No need for var keyword.
foo2 = 10    // JS is dynamically typed. Great, but don't misuse!!
var foo5
console.log (foo5)