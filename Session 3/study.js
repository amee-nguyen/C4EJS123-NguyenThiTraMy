// STUDY

// 1. Variable swap
// Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other.
// One
let a = 5;
let b = 6;
[a, b] = [b, a];
console.log(a, b);
// Two
let c = 6;
let d = 7;
let e = c;
c = d;
d = e;
console.log(c, d);

// 2. Split String into Array
// Using type conversion from String to Array
const str = 'Hello beauty there';
const arr = str.split(" ");
console.log(arr);

// 3. In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops, try it:
const numberOne = [4, 5, 7, -8];
const numerTwo = [1, 2, 3, 4];
console.log(...numberOne, ...numerTwo);