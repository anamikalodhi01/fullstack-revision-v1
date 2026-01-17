//Anonymous function :- a function without a name
const add = function(a, b) {
    return a + b;
};
console.log(add(2, 3)); // 5
// Here, we have assigned an anonymous function to the variable add. We can call this function using the variable name.
//Named function expression :- a function with a name assigned to a variable

// what are first class functions ?
// function statement vs function expression vs function declaration







a();                   // a is created a memory and function assigned to a
b();                  //give error, typerror b is not a function, b is not created in memory yet , it will be created when execution reaches this line


//! Function Statement
//* function statement is also called function declaration, it is a function which is defined using function keyword followed by name of function
function a(){
    console.log("Function Statement");
}

// the major difference between function statement and function expression is that function statement is hoisted and can be called before its definition whereas function expression is not hoisted and cannot be called before its definition.


//! Function Dfintion
//* A function definition is the block of code that defines a function’s name, parameters, and body.
function sum(x, y) {      // function definition
    return x + y;        // function body
}



//! function Expression
//* function expression is a function which is defined using function keyword but it is assigned to a variable
const b = function(){
    console.log("Function Expression");
};


// !Function Declaration
// *it is same as function statement, both are same


//! Anonymous function 
//* function wihtout  a name, does not have their own identity
//* these are used in a place where function is used as values, function acts like a value
function(){
    console.log("give error syntax error");        //? give syntax error , function statemnets require a function name
}


//! Named Function Expression
//* function with a name assigned to a variable
var c = function xyz() {
    console.log("Named Function Expression");
    console.log(xyz);         // prints the function definition of xyz
};
c();               // prints "Named Function Expression"
// xyz();          // gives error, xyz is not defined in this scope
// In the above example, we have assigned a named function expression to the variable c. We can call this function using the variable name c. However, we cannot call the function using its name xyz because it is not defined in this scope. The name xyz is only accessible within the function itself, which can be useful for recursion or debugging purposes.
// xyz is crated as local varaible


//! Difference between Parameters and Arguments
//* Parameters are the names listed in the function definition, whereas arguments are the real values passed to the function when it is invoked.
function multiply(x, y) {   // x and y are parameters, they are local variables
    return x * y;
}   
console.log(multiply(2, 3)); // 6, 2 and 3 are arguments
// we can slo pass here function as an argument inside funtion





imp //! First Class Functions
//* the ability to use functions as values, pass them as arguments to other functions, return them from other functions, and assign them to variables.
//* In JavaScript, functions are first-class citizens(means same thing), which means they can be treated like any other data type.

// eg.
// same in let and const temporal deadzone......
var d = function(param1){
    console.log(param1);
}   
d(function(){               // it will print the function definition
});

//eg2. 
var k = function(param1){
    console.log(param1);
}
function xyz(){

}
k(xyz);               // it will print the function definition of xyz function

//eg 3.

var s = function(param1){
    return function(){

    }
}
console.log(s());               // it will print the function definition of inner function




//! Arrow Functions
//* Arrow functions provide a concise syntax for writing functions in JavaScript. They are often used for short functions or callbacks.
//* Arrow functions do not have their own this, arguments, super, or new.target bindings. They are best suited for non-method functions.
//* function expression function statement can also be written using arrow function
//* come up as a part of ECMAScript 6 (ES6) standard

// Syntax
// const functionName = (parameters) => { 
//     // function body
// };

// Example 1: Simple arrow function
const addNumbers = (a, b) => {
    return a + b;
};









