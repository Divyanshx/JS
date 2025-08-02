// datatypes in js (primitive datatypes)
// 1. number
// 2. string
// 3. booleans
// 4. undefined
// 5. null (standalone value)
// 6. BigInt 
// 7. Symbol (unique)

//non-primitive -> object, array, function (also called reference type)


// typeof operator- gives the type of datatype 
let age= 20;
let str= "divyansh";
console.log(typeof age);  // gives number
console.log(typeof str); // gives string


// to convert number to string
// we will add a string that does not contain anything with that number
age = age + "";
console.log(typeof age); // gives string


// to convert string to number
// we will add + just before the string 
let string = "1234" ;
string = +string;
console.log(typeof string); // gives number


// long method to convert string to number or vice versa
let num = 34;
num = String(num);
console.log(typeof num); //gives string


//string concatenation
let str1= "11";
let str2= "9";
newStr= str1 + str2;  // gives 119
console.log(newStr);
// converting both string into number and then adding will give
newStr2= +str1 +  +str2;
console.log(newStr2); // gives 20


// template string
let aboutMe= `my name is ${str} and I'm ${age} years old`;
console.log(aboutMe); // my name is divyansh and I'm 20 years old
