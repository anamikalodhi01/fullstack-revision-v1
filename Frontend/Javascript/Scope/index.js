// BLOCK

{
    // this is block
    // block is also knowns as compound statement
    // this block combining multiple javascript statements into a group
    // we group them beacuse javascript allows only one statement in places where a single statement is expected
    // wrapping up our multiple statements, it is grouping toghether multiple statemnts so that we can use it in a place where js expects only one statement
}

//if (true)  // this gives syntax error beacuse if expects only one statement


if(true){
    // compound statement
    var a = 10;
    console.log(a);
}

// for single statement no need of block
if(true)
    console.log("Hello World");


// BLOCK SCOPE :-

{
    var a = 10;             // can access this variable outside the block, var is golbal scope and function scope 
    let b = 20;             // they are stored in separate memory space which is reserved for this block
    const c = 30;
    console.log(a);        // 10
    console.log(b);        // 20
    console.log(c);        // 30
}
console.log(a);        // 10
// console.log(b);      // ReferenceError: b is not defined
// console.log(c);      // ReferenceError: c is not defined


// SHADOWING :-


var a = 100;         
{
    var a = 10;            // this variable shadows the outer variable a, modify the value of above a variable because they both are pointing to same memory space
    let b = 20;             
    const c = 30;         
    console.log(a);        // we get 10 not 100 beacuse inner variable shadows the outer variable
    console.log(b);        
    console.log(c);        
}
console.log(a);           // 10


// this is not in case of let and const

let b = 100;                      // hoisted separately in memory space
{
    var a = 10;            
    let b = 20;                  // it is shadowing above variable here b is different memory space from outer b
    const c = 30;
    console.log(a);        
    console.log(b);             // 20
    console.log(c);        
}
console.log(b);                 // 100




