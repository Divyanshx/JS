// Arrow function

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()   
// hitesh , welcome to website
// {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }


// user.username = "sam"
// user.welcomeMessage()
//sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }





console.log(this);  // {} (this keyword returns empty object)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()  // undefined (this keyword cannot be used in function)

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai() // undefined


// const chai =  () => {           //    this is how to define arrow function
//     let username = "hitesh"
//     console.log(this);
// }

// chai() // {}  ( unlike ordinary function, this time it returns an empty object)



// const addTwo = (num1, num2) => {             // multiple ways to define arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2          // no need to use return keyword if declared like this in only one line

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})   // returns object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()    // will  study later in detail