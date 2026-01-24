//promises this is specail object in js , are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. 
//A promise can be in one of three states: pending, fulfilled, or rejected.


// Solving problem of inversion of control using promise
// const cart = ["shoes", "pants", "kurta"];

// createOrder(card, function(orderId){
//     proceedToPayement(orderId);
// })
// control of our program to other part of code now how we handel this using promise

// const promise = createOrder(cart); // createOrder api will return a promise and promise is  an empty object with some data value in it and data value will hold what createOrder will return

// createOrder api is an async operation so it will take some time to return the value so initially promise will be in pending state
// as soon as the 11 line executed it return an object with undefined property called data
// after some time when createOrder api will return the value promise will be in fulfilled state and data property will hold the return value of createOrder api
// if there is any error while creating order promise will be in rejected state

// {data: undefined}  --> pending state
// {data: "order id"} --> fulfilled state
// {error: "error message"} --> rejected state

// promise.then(function(orderId){                  // attaching a callback function to promise object 
//     proceedToPayement(orderId);                  // when createOrder api create order then it fill the promise object with the data and then promise will execute the callback function, contorl of our program with us  call it just once not multiple times 
// })

// then is the function whihc is avaibale in promise object and then function will be executed when promise is in fulfilled state
// then function takes a callback function as an argument and this callback function will be executed when promise is in fulfilled state
// the return value of createOrder api will be passed as an argument to this callback function


// api given by browsers to us to make external calls
// fetch()


const GITHUB_API = 'https://github.com/anamikalodhi01/';
const user = fetch(GITHUB_API);  // fetch api will return a promise object(user)
console.log(user);                // promise object(user) in pending latern on it will be fulfilled with the data
user.then(function(data){
    console.log(data);          // when promise is fulfilled then this callback function will be executed and data will be passed as an argument to this callback function
})

// promise :- state, result -> data 
// js guarantees that promise will be executed only once either in fulfilled state or in rejected state
// .then() -> for fulfilled state
// .catch() -> for rejected state
// .finally() -> executed in both the states
// promise objects are immutable once they are created their state cannot be changed manually only the js engine can change the state of promise object based on the async operation result
// immutable, resolved just once , pass in wherever async operation is needed



// Solving problem of callback hell using promise
// handles using promise chaining

createOrder(cart, function(orderId){    
    proceedToPayement(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance(function(){
            });
        });
    });
})                 // we can avoid this callback hell using promise chaining

createOrder(cart)
.then(function(orderId){
    return proceedToPayement(orderId);   // returning a promise from here and pass it to the next then block
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo); // returning a promise from here
})
.then(function(){
    return updateWalletBalance();        // returning a promise from here
});

// can also use arrow function
createOrder(cart)
.then(orderId => proceedToPayement(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(() => updateWalletBalance());
