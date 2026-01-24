//Example of closure

// function outer(){
//     var a = 10;
//     function inner(){                // inner function remember the variable a even after outer function execution is over
//         console.log(a);
//     }
//     return inner;
// }
// outer()();               // 10
// outer();                 // returns inner function definition
//var close = outer();
//close();               // 10



// function outer() {
//     function inner() {
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }

// outer()();
// this will also form closure and print 10

// function outer() {
//     function inner() {
//         console.log(a);
//     }
//     let a = 10;
//     return inner;
// }

// outer()();

// in this eg, if we use let instead of var it will also print 10 because inner function will form closure with its lexical scope where a is defined before inner function is invoked.

function outer(b) {
    function inner() {
        console.log(a, b);
    }
    let a = 10;
    return inner;
}

outer("helloworld")();
// also form closure with both a and b and print 10 helloworld because b is also in lexical scope of inner function









