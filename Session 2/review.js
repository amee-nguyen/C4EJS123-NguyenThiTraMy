// 3. Write a program to print out

// a. 7 numbers, starting from 0 (no user input)
for (let x = 0; x < 7; x++) {
    console.log(x);
}

// b. n numbers, starting from 0, n entered by user
let n = Number(prompt('Enter n'));
for (let x = 0; x < n; x++) {
    console.log(x);
}

// c. A sequence of numbers, starting from 3, ending before n, n entered by user
for (let x = 3; x < n; x++) {
    console.log(x);
}

// d. A sequence of numbers, starting from c, ending before n, c and n entered by user
let c = Number(prompt('Enter c'));
for (let x = c; x < n; x++) {
    console.log(x);
}

// e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user

for (let x = c; x < n; x += 3) {
    console.log(Number(x));
}

// f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user

let s = Number(prompt("Enter s"));
for (let x = c; x < n; x += s) {
    console.log(Number(x));
}

// 4. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
let a = Number(prompt("Enter a"));
let result = 1;
for (let x = 1; x <= a; x++) {
    result = result * x;
}
alert(`The factorial of ${a} is ${result}`);

// 5. Write a program asking users their age, and then decide if they are old enough to view a 14+ content
let age = Number(prompt('How old are you?'));
if (age < 14) {
    alert(`You are not old enough to view this content!`);
} else {
    alert(`Enjoy!`);
}