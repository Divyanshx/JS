// undefined
let firstname;
console.log(typeof firstname);  //undefined

//null
let age = null;
console.log(typeof age);  // object (bug/error in js)
 
//BigInt
let a= BigInt (123);
let b= 7n;  
console.log(Number.MAX_SAFE_INTEGER);
console.log(a+b); // 130n 
console.log(typeof a); // bigint
console.log(typeof b); //bigint
console.log(typeof a+b); //bigint7 ??


// booleans - true and false
// comparison operators :- < , > , <= , >= , == , === , != , !==
 
// == vs ===
let num1 = 7; // number
let num2 = "7"; // string
console.log(num1 == num2 );  // true 
console.log(num1 === num2);   // false ( this also checks the datatype)
 
// != vs !== (same as above)

// if-else - same as c

let win=17;
let guess= +prompt("guess my number-"); // used to take input from the user
// prompt will take this number in string  so we converted this into number
if (guess == win) console.log("you are right !");
else if (guess < win) console.log("your guess is less than my number");
else console.log("your guess is greater than my number");


// truthy and falsy values
// falsy values are -
// 1. false
// 2. ""
// 3. null 
// 4. undefined
// 5. 0   
// 6. -0
// 7. BigInt 0n
// 8. NaN
// all other values are truthy values 
let fname = "";
if ( fname ) console.log ("giga");
else console.log ("chad");  // this code gives  chad  as output because fname has a falsy value and if condition will not become true


// ternary operator - same as c++
// && (and operator) and || (or operator) - same as c++
// nested if else - same as c++
// if-else if-else - same as c++
// switch statement - same as c++
// while loop - same as c++
// for loop - same as c ++
// break and continue keyword - same as c++
// do while loop - same as c++


