// 6. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
let a = Number(prompt('Enter a number'));
if (a < (9 / 2)) {
    alert(`Lower half of 9`);
} else {
    alert(`Higher half of 9`);
}

// 7. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
let n = Number(prompt('n ='));
let x = Number(prompt('x ='));
if (x < (n / 2)) {
    alert(`${x} is in lower half of ${n}`);
} else {
    alert(`${x} is in higher half of ${n}`)
}

// 8. Write a script to check if a number is even (divisible by 2) or odd number
let num = Number(prompt('x ='));
if (num % 2 == 0) {
    alert(`${num} is an even number`);
} else {
    alert(`${num} is an odd number`);
}

// 9. Write a program to print out
// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
let number = 6;
for (var x = 0; x < (number / 2); x++) {
    console.log('L');
}
for (let n = 0; n < (number - x); n++) {
    console.log('H');
}

// b. n L’s and H’s in total, n entered by user
let totalNumber = Number(prompt("Enter the total number of L's and H's"));
for (var x = 0; x < (totalNumber / 2); x++) {
    console.log('L');
}
for (let n = 0; n < (totalNumber - x); n++) {
    console.log('H');
}

// c. 8 1’s and 0’s in total, consecutively
let total = 8;
for (let x = 0; x < total; x++) {
    if (x % 2 == 0) {
        console.log(0);
    } else {
        console.log(1);
    }

}


// d. n 1’s and 0’s in total, consecutively, n entered by user
let total_number = Number(prompt("Enter the total number of 1's and 0's"));
for (let x = 0; x < total_number; x++) {
    if (x % 2 == 0) {
        console.log(0);
    } else {
        console.log(1);
    }

}

// 10. Write a script to calculate the BMI (Body Mass Index) of a person.
let weight = Number(prompt("Your weight in kg?"));
let height = Number(prompt("Your height in cm?"));
height = height / 100;
let BMI = weight / (height * height);
BMI = BMI.toFixed(2); //the fixed number.
alert(`Your BMI is ${BMI}`);
if (BMI < 16) {
    alert(`You are severely underweight`);
} else if (BMI < 18.5) {
    alert(`You are underweight`);
} else if (BMI < 25) {
    alert(`You are normal`);
} else if (BMI < 30) {
    alert(`You are overweight`);
} else {
    alert(`You are obese`);
}