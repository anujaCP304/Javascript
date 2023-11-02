// Synchronous and asynchronous code in JavaScript are two ways of handling the execution of code in a program.

// Synchronous code means that the code is executed line by line, one at a time, in a single thread. 
// This means that each line of code has to wait for the previous line to finish before it can run. 
// For example:

function syncFunc() 
{ 
    console.log("Hello"); 
    console.log("Catchpoint"); 
}

//This code will print “Hello” and then “World” to the console, in that order. 
//The second console.log statement has to wait for the first one to finish before it can run.

//**************************************************************************************************

// Asynchronous code means that the code can run without waiting for the previous line to finish, 
// or without blocking the main thread. This means that multiple operations can be executed concurrently, 
// or in parallel, without affecting each other. 
// For example:

function asyncFunc() 
{ 
    console.log("Hello"); 
    setTimeout(() => { 
        console.log("Catchpoint"); 
    }, 1000); 
}

asyncFunc();

// This code will print “Hello” and then “World” to the console, but not in that order. 
// The setTimeout function is an asynchronous function that takes a callback function and a delay time as arguments. 
// It will execute the callback function after the delay time has passed, without blocking the main thread. 
// The second console.log statement does not have to wait for the first one to finish before it can run.
