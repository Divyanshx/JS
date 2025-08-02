// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();       // <--- this terminator here is used to end the iife or else another iife will get error

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')   // <---- this is how u can also pass argument in the iife



// Internal working in js

// there are mainly two types of execution context
// 1. global execution context (this)
// 2. functional execution context
// one more (but not that imp) 3. Eval execution context

// 1. memory creation phase
// 2. execution phase

// call stack in js (same as in c++)
