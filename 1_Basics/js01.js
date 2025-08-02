 console.log("hello world");
// this is a comment

var name="divyansh"; //declared a variable
//"use strict"; --- checking will be strict --- using this will make your code treat based on newer version
name = "hardik"; // updated a variable
console.log(name);  // hardik

/* rules for naming variable in javascript
- cannot start with number
- only $ and _ symbols can be used
- cannot have spaces
- convention: start variable name with small letter and use camelCase writing
for eg - firstName, avgMarks, etc.
note - first_name , avg_marks ---- this is called snake case writing */

let age= 20; // variable declared using let keyword
//why not var?    block scope vs function scope (will study later)
console.log(age);  // 20

const pi= 3.14; // declared a constant with const keyword
console.log(pi);   // 3.14

console.table([name,age,pi]); //prints multiple values in a table format

alert (3+3) // works on browser, not on nodejs

//documentation
// mozilla documentation (mdn)
// official documentation - ecmascript (tc39.es/ecma262)