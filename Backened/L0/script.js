// Day 1 ( Recap of JS fundamentals )



// Hoisting in JavaScript

// console.log(x);     // undefiined
// var x = 30;
// console.log(x);


// //console.log(y);     // error can not do this  in case of let temporal deadzone
// let y = 40;
// console.log(y);


// console.log(z);

// console.log("hello");


// there is difference between undefined and not defined
//undefined -> variable is declred but value not assigned
//not defined -> variable is not declared at all
// in js jit compilaiton, ek bar mian ek lin ko compile krta hai line by line compilation one line then run then comple next lien then run
// agr line no 55 pe error agya to line no 55 ke bd ka code nhi chlega


// concepts -> synchoronous, asynchroonous, async await, callbacks, promises, hoisting, closures, scope, prototype, this keyword, event loop


// {
//     var a = 10;
//     let b = 20;
// }

// console.log(a);   //10
// console.log(b);   // error b is not defined



for(var i =0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, 4000);
}

//output 5 5 5 5 5


for(let i =0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, 4000);
}

//output 0 1 2 3 4


//  var -> functional scope
// let, const -> block scope


namaste js channel 