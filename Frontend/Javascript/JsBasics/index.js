
//Declaration vs Initialization

//Declaration means creating a variable and reserving memory for it without assigning any value to it.
//Initialization means assigning a value to the variable for the first time.

let x;      // Declaration
x = 10;    // Initialization


// Var, let, const

// var -> can be re-declared and updated
var a = 5;
var a = 10;
var a;      // Declaration (initialized to undefined automatically)
// Function-scoped
// Hoisted and initialized with undefined
// Can be re-declared and re-assigned
// Can cause bugs → not recommended

// let -> can be updated but not re-declared
//let b = 15;
b = 20;    // Update
// let b = 25; // Error: Identifier 'b' has already been declared
//let b;      // Declaration only not initialized
// Block-scoped
// Hoisted but not initialized (TDZ)
// Cannot be re-declared, but can be re-assigned
// Preferred for variables that change

// const -> cannot be updated or re-declared
//const c = 30;
// c = 35;    // Error: Assignment to constant variable
// const c = 40; // Error: Identifier 'c' has already been declared
// const d;    // Error: Missing initializer in const declaration
const c = 30; // Must declare + initialize together
const d = 40; // Must declare + initialize together
// Block-scoped
// Hoisted but not initialized (TDZ)
// Must be initialized at declaration
// Cannot be re-declared or re-assigned
// Preferred by default


// Function Scope (var)
//A variable is function-scoped if it is accessible only inside the function where it is declared.
function test() {
  var x = 10;
  console.log(x); // accessible
}

console.log(x); // ReferenceError

function demo() {
  if (true) {
    var y = 20;
  }
  console.log(y); //  20
}

// Block Scope (let, const)
//A variable is block-scoped if it is accessible only inside the block {} where it is declared.

if (true) {
  let a = 5;
  const b = 10;
}

console.log(a); //  ReferenceError
console.log(b); //  ReferenceError


// Ways to declare a function in JavaScript
// 1. Function Declaration
function greet() {
    console.log("Hello from Function Declaration");           //only in this case, memory is allocated to entire function body
}

// 2. Function Expression
const greetExpr = function() {
    console.log("Hello from Function Expression");           //In memory allocation it also behaves like variable with placeholder undefined value
};

// 3. Arrow Function
const greetArrow = () => {
    console.log("Hello from Arrow Function");
}



