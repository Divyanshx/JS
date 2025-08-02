// Scope

// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 5
    // console.log("INNER: ", a); // 10
    
}



// console.log(a); // 300
// console.log(b);  // this gives error and says that b is not defined
// console.log(c); // 5 ( this is why we dont use var)


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username ); // hitesh
//     }
//     // console.log(website); // error

//      two()

// }

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); // hitesh youtube
    }
    // console.log(website);  // error
}

// console.log(username); // error


// ================================================ \\


console.log(addone(5))   // 6   

function addone(num){
    return num + 1
}



// addTwo(5)   // declaring function like this cannot be executed before function declaration, so this will give error
const addTwo = function(num){       // another way of creating function and storing it into a variable
    return num + 2
}

console.log(addTwo(5)) // 7