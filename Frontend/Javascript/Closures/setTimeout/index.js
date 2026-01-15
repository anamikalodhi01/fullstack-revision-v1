// function x(){
//     var i = 1;
//     setTimeout(function(){                // this function forms a closure and refernece to i, wherever this function goes it takes reference of i along with it 
//         console.log(i);                   // it prints value of i after 3 seconds
//     }, 3000);
//     console.log("Namaste");                // when code executes or run it prints firstly namaste then wait for 3000 ms then run the function and print the value of i, js does not wait for i 
// }
// x();


// setTimeout it takes the callback function and attach a 3000 ms timer to it and it stores it somehwere and js procceeds and does nto wait and runt he next line and once the timer done it takes the function and put it to call stack and then run it 
// event loop ??

// how would to do print 1 after 1 sec 2 after 2 sec 3 after 3 sec upto till 5
// but not in actual it do so 

// function x(){
//     for(var i = 1; i<= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("namaste");
// }
// x();

// output :- it print firstly namaste then after 1 sec 6 after 2 sec 6 after 3 sec 6 6 6 
// explanation :- why it behaves differnetly due to becoz of closure , setTimeout remebers reference of i not value of i refereing to same reference of i 

function x(){
    for(let i = 1; i<=5; i++){
        setTimeout(function(){
             console.log(i);
        }, i * 1000);
    }
    console.log("namaste");
}
x();

// output :- namaste
             //1
             //2
             //3
             //4
             //5
// this function forms closure with new variable each time, copy of i in each iteration is new 
// each and everytime function is called it is refering to diff memory location whihc is their individual i separate copy of i which were int he scope
// let is block scope and every time it  creates new copy 



// we can do the same thing var also 

function x(){
    for(var i = 1; i<=5; i++){
        function close(x){
            setTimeout(function (){
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("namaste");
}
x();

// initially it was refering to same memory space
// but now we created new copy of i using close function and do same thing as let everytime close function called it creates new copy  
