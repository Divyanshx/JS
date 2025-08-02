let score1 = "33"
let score2 = "33abc"
let score3 = undefined
let score4 = null

let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)

console.log(valueInNumber1); //33
console.log(valueInNumber2); //NaN (not a number)
console.log(typeof valueInNumber2) //number
console.log(valueInNumber3); //Nan
console.log(typeof valueInNumber4) //number
console.log(valueInNumber4); //0

let isLoggedIn = 5
let boolenisLoggenIn = Boolean(isLoggedIn) 
console.log(boolenisLoggenIn) //true

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
console.log(null === 0) //false
// never compare different datatypes (bad practice)

// array
const numbers = [23, 44, 56]

// object
let myobject = {
    name: "divyansh",
    age : 21
}
//function
const myfunction = function(){}

console.log(typeof numbers); //object
console.log(typeof myobject); //object  
console.log(typeof myfunction); //function

// Stack and Heap memory
// all primitive value's memory get allocated in the stack
// and all non primitive value's memory get allocated in the heap
// in stack we get copy of the value
// but in heap we get the actual reference of the value
