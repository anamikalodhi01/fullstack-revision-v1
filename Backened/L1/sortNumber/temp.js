let arr = [34, 67, 89, 11, 56, 23];

let [a,b,...c] = arr;           // rest operator
//console.log(a);    //34
//console.log(b);    //67
//console.log(c);    //[89, 11, 56, 23]

// Spread operator -> spread kr deta hai array ke elements ko alag alag
let arr2 = [1,2,3, ...arr, 90, 100];
//console.log(arr2);   //[1, 2, 3, 34, 67, 89, 11, 56, 23, 90, 100]