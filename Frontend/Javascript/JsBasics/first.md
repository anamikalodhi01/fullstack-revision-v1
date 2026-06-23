# JavaScript first page notes
> **Everything in Javascript happes inside an execution context.**

## Exectuion Context
It contains two components memory and code component.
| Memory(Variable Env) | Code(Thread of Execution) |
|:-----|:----|
| it stores variables and func in form of key value pairs | Code is executed one line at a time|

> **Js is a synchronous single-threaded language.**
one command at a time and in specific order
global execution context is created when we run js code

```
var n = 2;
function sq(num){
    var ans = num * num;
    return ans;
}
var sq2 = sq(n);
var sq4 = sq(4);
```

| Memory(phase 1) | Code(phase 2) |
|:-----|:----|
| n : undefined | Code is executed one line at a time, it actually place 2 in n|
| sq : {stores whole func code}| nothing to do|
| sq2 : undefined | in function invoke, brand new execution context is created whihc again have memory and code component first phase is memory creation in this allocating memory to num and ans and value is undefined, now comes phase 2 n is passed to num n is argument and num is parameter, put value 2 in num , do calculation and give value to ans , whenever see return it tells you are done with work return the control of the prgogram to place where function was invoked means line no 20  and then it replace in outer memory component sqaure2 value from undefiend to 4 and this whole inner exectuion context will deleted after return |
| sq4 : undeifned | same above |

> **whole global exectuion context will delete after all code executed**

> **to control this exectuion conext creation and deletion js manages call stack , whole exection context pushed into stack, and whenever a new exection context or a new function invoke then it pushed to stack E1 and after return it pop from stack in last call stack gets empty**

> **Call stack maintains the order of execution of exectuion contexts**