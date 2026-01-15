// Closures :-  closure is a function having access to the parent scope, even after the parent function has closed.
// a function bind together with its lexical environment, bundled with its lexical scope
// In JavaScript, closures are created every time a function is created, at function creation time.
// The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. 

// function x(){
//     var a  = 7;
//     function y(){
//         console.log(a);
//     }
//     y();    
// }
// x();   // 7

// eg 2

// function x(){
//     var a = 7;
//     function y(){                  // y remember a from its lexical scope parent function x
//         console.log(a);
//     }
//     return y;                        // closure will return function y with its lexical scope
// }
// var z = x();
// console.log(z);            // prints the function definition of y
// z();                       // 7

// function along wiht its lexical scope bundled toegteher forms a closure.


// function x(){
//     var a  = 7;
//     return function y(){
//         console.log(a);
//     }  
// }
// var z = x();   
// console.log(z);          
// z(); 


// function x(){
//     var a  = 7;
//     function y(){
//         console.log(a);          // reference to variable a, reference point to 100
//     }  
//     a = 100;
//     return y;
// }
// var z = x();   
// console.log(z);          
// z(); 

// In the above example, when y is invoked, it refers to variable a. At that time, a has value 100. Hence, 100 is printed.

function z(){
    var b = 900;
    function x(){
      var a  = 7;
      function y(){
        console.log(a, b);          // 
      }  
      y();
    }
    x();
}
z();  // 7 900

// Here, y has access to both a and b because of lexical scoping. a is in the local scope of x, and b is in the local scope of z, which is the parent function of x.
// Closures are widely used in JavaScript for various purposes, including data privacy, function factories, and maintaining state in asynchronous programming.
// these and b memory allocation retained not garbage collected

// functions rememebrs something -> closure

// uses of closures:
// module design pattern
// currying
// function like once
// memoize
// maintaining state in async programming
// data privacy
// setTimeouts
// Iterators





