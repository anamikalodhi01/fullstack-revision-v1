# Javascript second page notes 

## HOISTING IN JAVASCRIPT :- 

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
- This means that you can use variables and functions before they are declared in the code.
- it is a phenomena by which we can access variables and functions before their initialization and declaration.
- can access it without any error but the value will be undefined in case of var

### Example
```
var x = 7;
function getName(){
    console.log("Hello");
}
//invoking the function
getName();                    // Hello
console.log(x);               // 7
```

### Example of Hoisting
```
getName();                    // Hello
console.log(x);               // undefined
var x = 7;
function getName(){
    console.log("Hello");
}
```

### another eg of hoisting
```
getName();                    // Hello
console.log(x);               // reference error: x is not defined
function getName(){
    console.log("Hello");
}
```

```
var x = 7;
function getName(){
    console.log("Hello");
}
console.log(getName);        // f getName(){consle.log("Hello");} 
// also run when we put consolelog above the function same way
```

> **Even before the code start executing memory is allocated to each variable an function which means memory is allocated to each line of code before execution**

> **In the first phase of memory allocation, for variable declarations using var, memory is allocated and initialized with - undefined. For let and const, memory is allocated but not initialized, leading to a temporal dead zone until the declaration is encountered during execution.**
but 

> **In case of function declaration memory is allocated to the entire function body - actual copy of function here**




### Example of Hoisting
```
getName();                // in case getName() able to invoke the function before its declaration because of hoisting    
console.log(x);           // In case of var x =7; it will give undefined because of hoisting
// // In most of the programming languages it will give error but in javascript it will not give error because of hoisting            

var x = 7;                // if we remove this line and run the above console.log(x) then it will give reference error: x is not defined

function getName(){
    console.log("Hello");
}

console.log(getName);    // it will give the function definition
```

### In case of arrow function
```
getName();                     // IN case of here arrow function it will give type error getName is not a function
console.log(x); 
console.log(getName);

var x = 7;
var getName =() =>{            // when getName is a arrow function it behave like variable it does not behave like a function , in memory allocation pahse of the execution context it will allocate memory to getName as variable with undefined value
    console.log("Hello");
}

console.log(getName);  
```

### In case of this function
```
var getName2 = function(){
    // it also behave just like a variable
}
```




//Difference between hoisting in var, let, const

// var
// Hoisted
// Initialized with undefined
// Accessible before declaration (but value is undefined)
// Function-scoped

console.log(x);     // undefiined
var x = 30;
console.log(x);

// let

// Hoisted
// Not initialized
// Exists in Temporal Dead Zone (TDZ)
// Access before declaration → ReferenceError
// Block-scoped

console.log(y);     // error can not do this  in case of let temporal deadzone
let y = 40;
console.log(y);

// const

// Hoisted
// Not initialized
// Exists in Temporal Dead Zone (TDZ)
// Must be initialized at declaration
// Block-scoped

console.log(z);       // reference error can not do this  in case of const temporal deadzone
const z = 50;
console.log(z);
