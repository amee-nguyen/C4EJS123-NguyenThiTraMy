// STUDY

/*
1. Three different examples of invalid variable names:
- first number
- 1number 
- number?

2. Check a variable data types uses: typeof

3. 1-b; 2-a; 3-e; 4-c
*/

// SERIOUS EXERCISES.

// 3a.
let message = 'Coding is great';
console.log(message);

// 3b.
let studentCount = 0;
console.log(studentCount);

// 4a.
let message = 'Coding is great';
message = 'Coding might not be easy, but still great';
console.log(message);

// 4b.
let studentCount = 0;
studentCount = 16;
console.log(studentCount);

// 4c.
let message = 'Coding is great';
message = 'Coding might not be easy, but still great';
console.log(message.toLowerCase());

// 4d.
let studentCount = 0;
studentCount = 16;
studentCount += 1;
console.log(studentCount);

// 5.
alert(`You look beautiful today`);

// 6.
let x = prompt('Hi there, your name please?');
alert(`Hi ${x}`);

// 7.
let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
alert(`Hi ${firstName} ${lastName}`);

// 8.
let length = prompt('Enter side length of the square');
length *= length;
alert(`The square area is ${length} `);

// 9.
let radius = prompt('Enter the radius of the circle');
radius = Math.PI * Math.pow(radius, 2);
alert(`The circle area is ${radius}`);

// 10.
let temperatureCel = prompt('Enter the temperature in Celcius');
let temperatureFah = [(temperatureCel * 1.8) + 32];
alert(`${temperatureCel} (C) = ${temperatureFah} (F)`);