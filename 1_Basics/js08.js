// Objects

// singleton
// Object.create   // this way we can create singleton objects

// object literals   // we will study this right now. singleton later

const mySym = Symbol("key1")   // creating a symbol to be used in our object


const JsUser = {
    name: "Divyansh",
    "full name": "Divyansh Sharma",
    [mySym]: "mykey1",    // this is syntax for how to represent symbol in the object
    age: 18,
    location: "Jaipur",
    email: "divyansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   // two ways to access email from object
// console.log(JsUser["email"])
// console.log(JsUser["full name"])  // only way to access full name 
// console.log(JsUser[mySym])  // only way to access symbol mySym

JsUser.email = "divyansh@chatgpt.com"  //overwrites email
// Object.freeze(JsUser)        // freezes the object and no further changes can be made
// JsUser.email = "hitesh@microsoft.com" 
// console.log(JsUser); // {
//     name: 'Divyansh',
//     'full name': 'Divyansh Sharma',
//     age: 18,
//     location: 'Jaipur',
//     email: 'divyansh@chatgpt.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting); // [Function (anonymous)] // as we didn't executed the function, it just returned reference of the function
console.log(JsUser.greeting()); //Hello JS user // undefined ??
console.log(JsUser.greetingTwo()); //Hello JS user, Divyansh // undefined??



// const tinderUser = new Object()    ---> this is how to create a singleton object using constructor
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'Samay', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {             // nesting of objects
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // this is how to access in nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }             // creates an object with two object in it
// const obj3 = Object.assign({}, obj1, obj2, obj4)           // assign(target object, source object) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2}         // using spread operator 
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [             // array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email); // h@gmail.com

console.log(tinderUser); // { id: '123abc', name: 'Samay', isLoggedIn: false }

//imp
// console.log(Object.keys(tinderUser));    //  this creates array of keys of objects  // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));      // this creates array of values of objects // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));     // creates array of array of key value pairs  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course    // destructring the object (we can name it whatever we want)

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// json

// [
//     {},
//     {},
//     {}
// ]
