//! What is a Callback function in js
// A function which is passed as an argument to another function is called callback function
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// Callback functions are used to handle asynchronous operations in JavaScript. They allow us to define a function that will be called when a certain event occurs or when a certain operation is completed.
//eg

setTimeout(function(){
    console.log("Hello after 5 seconds");
}, 5000);  // here function passed to setTimeout is callback function which will be called after 5000 ms and it will store it and js will not wait for settimeout to finish over here 


// settimeout will take callback function and store it in separate memory space  and it will atach a time of 5000 to it 
// js will not wait for settimeout to finish it will go to next line and once timer is over it will take the function from memory space and put it to call stack and then execute it
// callback function gives us the power of asynchornity as it does not wait here for 5000 ms to expire it will go to next line and do other work
// it will moe next part of the code and once timer is over it will execute the callback function
// this is how js handles asynchronous operations using callback functions
// firstly it store the callback function in some memory space and attach a timer to it and then js move to next line without waiting for timer to finish and once timer is over it will take the function from memory space and put it to call stack and then execute it 

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
})

// output of above 
// output will be x 
                  //y
                  //timer after 5000 ms

// why y is a callback function here because it is passed as an argument to function x and it can be called inside function x after some operation is done inside x 
// callabck functon is necessary for asynchronous operations in js as it allows us to define a function that will be called when a certain event occurs or when a certain operation is completed


//! Javascript is a synchronous and single threaded language
// It can do on e thing at a time in specific order
// synchronous means line by line execution of code
// single threaded means one command at a time


//! Blocking the main thread
//! Power of Callbacks
//! Deep about Event Listeners
//! Closures Demo with Event listeners
//! Scope demo with Event listeners
//! Garbage Collections & removeEventListeners



// idempotent function intialise funtion or run fucntion only once 