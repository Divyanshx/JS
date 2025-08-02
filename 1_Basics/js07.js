//Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // another way of creating array
console.log(myHeors[1]); //naagraj

// Array methods

myArr.push(6) // 0 1 2 3 4 5 6
myArr.push(7) // 0 1 2 3 4 5 6 7
myArr.pop() // 0 1 2 3 4 5 6 
console.log(myArr);


// myArr.unshift(9) // 9 0 1 2 3 4 5 6  ( not good )
// myArr.shift() // 0 1 2 3 4 5 6 

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join() // converts it into a string

console.log(myArr); // 0 1 2 3 4 5 6   --> array
console.log(newArr); // 0 1 2 3 4 5 6 --> string
console.log(typeof newArr); // string


// slice, splice

console.log("A ", myArr); // A  [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr);  // B  [0, 1, 2, 3, 4, 5, 6]


const myn2 = myArr.splice(1, 3)  // splice also modifies the original array and the range is also included
console.log(myn2); // [ 1, 2, 3 ]
console.log("C ", myArr);  // C  [ 0, 4, 5, 6 ]


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros] // same as concat (spread operator)

console.log(all_new_heros); //["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // return empty array because it does not know for what 
// key or value array should be created (interesting case)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]