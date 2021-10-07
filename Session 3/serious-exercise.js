// SERIOUS EXERCISE

// 5. Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
let array = prompt('Enter a sequence of Number, separated by commas (,)');
let num = array.split(',');
let sum = 0;

for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
}
alert(`The sum of them is ${sum}`);

// 6. Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
let arr = prompt('Enter a sequence of numbers, separated by ","');
let arr1 = arr.split(',');
alert(`The smallest number is ${Math.min(...arr1)}`);

// 7. Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
const number = [3, 4, 6, -9, 10, -88, 2];
let outputNumber = prompt('Enter a number');
let count = 0;
for (let i = 0; i < number.length; i++) {
    if (outputNumber == number[i]) {
        alert(`${outputNumber} is found in my array`);
        count++;
        break;
    }
}
if (count == 0) {
    alert(`${outputNumber} is NOT found in my array`);
}

// 8.1. Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
let sheep = [5, 7, 300, 90, 24, 50, 75];
console.log('Hello, my name is My and here is my sheep sizes:');
console.log(...sheep);

// 8.2. At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
console.log(`Now my biggest sheep has size ${Math.max(...sheep)}`);

// 8.3. When your biggest sheer, its size will return to the default size, which is 8.
let maxNumber = sheep.indexOf(Math.max(...sheep));
console.log(`After shearing, here is my flock`);
sheep[maxNumber] = 8;
console.log(...sheep);

// 8.4. In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
let months = 4;

for (let mon = 1; mon <= months; mon++) {

    for (let i = 0; i < sheep.length; i++) {
        sheep[i] = sheep[i] + 50;
    }
    console.log(`MONTH ${mon}`);
    console.log('One month has, passed, my sheeps have grown, here are their sizes');
    console.log(...sheep);
    console.log(`Now my biggest sheep has size ${Math.max(...sheep)}`);
    console.log(`After shearing, here is my flock`);
    console.log(...sheep);
}

// 8.5. After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:
let total = 0;

for (let i = 0; i < sheep.length; i++) {
    total = total + sheep[i];
}

console.log(`My flock has size in total: ${total}`);
console.log(`I would get ${total} * 2$ = ${total*2}$`);