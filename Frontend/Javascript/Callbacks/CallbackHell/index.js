// Js is a synchronous and single-threaded language
// It means it can do one thing at a time in a specific order
// Synchronous means line by line execution of code
// Single-threaded means one command at a time

//! Two issues of Callback
//? 1. Callback Hell
//? 2. Inversion of Control

// Callback Hell occurs when we have multiple nested callback functions which makes the code hard to read and maintain
// It is also known as Pyramid of Doom

setTimeout(function(){
    console.log("1st Task completed");       // duty of set time out to execute callback function after 5 seconds
}, 5000);

//! eg.

const cart = ["shoes", "pants"];
api.createOrder(cart, function(){
    api.proceedToPayment()
})

// here create order creates order then after that it calls proceed to payment
// but what if we have to do more tasks after proceed to payment like update user order history , send email etc
// so we will have to nest more callback functions inside each other which will lead to callback hell

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
})

//callback hell makes the code hard to read and maintain
// callback hell - nested callback functions which makes the code hard to read and maintain
// also leads to inversion of control
// inversion of control means we are giving control of our code to another function
// in above example we are giving control to createOrder function which will call proceedToPayment function after creating order
// we are losing control of our code to createOrder function
// to avoid callback hell we can use promises or async/await which are modern ways to handle asynchronous operations in js
// they make the code more readable and maintainable


//! Inversion of Control
// Inversion of Control occurs when we give control of our code to another function
// It means we are losing control of our code to another function
// In above example we are giving control to createOrder function which will call proceedToPayment function after creating order
// we are losing control of our code to createOrder function
// to avoid inversion of control we can use promises or async/await which are modern ways to handle asynchronous operations in js
// they make the code more readable and maintainable
// Inversion of Control - losing control of our code to another function

const cart = ["shoes", "pants"];
api.createOrder(cart, function(){
    api.proceedToPayment()
})

// we are blindly trusting createOrder function to call proceedToPayment function after creating order
// lot of bugs in createOrder function can lead to proceedToPayment function not being called
// mainly we are giving control of our code to another code or another function

