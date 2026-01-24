// What is promise 
//promises this is specail object in js , are used to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.
//A promise can be in one of three states: pending, fulfilled, or rejected.
// placeholder whihc will be filled later wiht value or promise object is a placeholder for a certain period of time until we recieve a value froma  asynchronous operation

//eg:-
const promise = createOrder(cart);
promise.then(function(orderId){                  // attaching a callback function to promise object 
    proceedToPayement(orderId);                  // when createOrder api create order then it fill the promise object with the data and then promise will execute the callback function, contorl of our program with us  call it just once not multiple times 
})

// can also wtite as
createOrder(cart).then(function(orderId){
    proceedToPayement(orderId);
})

// initially promise is in pending state
// after some time when createOrder api will return the value promise will be in fulfilled state
// if there is any error while creating order promise will be in rejected state
