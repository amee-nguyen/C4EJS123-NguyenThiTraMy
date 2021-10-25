// 1.
// 1-D, 2-A, 3-C, 4-B

// 2. Instead of using setTimeOut to create a timer, we can use setInterval for shorter code

function exercise4() {
    console.log('Heehaw');
};
setTimeout(exercise4, 4000);
setInterval(exercise4, 4000);

// 3.1. Can a variable declared by let, in a function still exists after the function finishes running?
// "let" won't exist after the function finish running

// 3.2. Can var variable declared by var, in a function still exists after the function finishes running?
// "var" still exist after the function finish running

// 4. Use getElementsByTagName function to get ALL of the <li> tag. Print/log out the first element (which is <li>Articles</li>) and then use for loop to print ALL of the DOM you get from the function.

let x = document.getElementsByTagName('li');
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// 5. Use getElementsByTagName function to get ALL of the <div> tag. Print/log out the second element (which is <div class=”singer”>Nate Ruess</div>) and then use for loop to print ALL of the DOM you get from the function.

let d = document.getElementsByClassName("singer");
console.log(d)
console.log(d[1])
for (let i = 0; i < d.length; i++) {
    i = d;
    console.log(d)
}

// 6. Learn how to remove (Delete) an HTMLElement using HTMLElement.remove() function

let d = document.getElementById('delete');
d.addEventListener('click', () => {
    d.remove();
})

// 7. When using addEventListener, in the callback you can add a parameter / argument to get more information about the event

let b = document.getElementById('button 1');
b.addEventListener('click', (e) => {
    console.log(e.target);
});
let c = document.getElementById('button 2');
c.addEventListener('click', (f) => {
    console.log(f.target);
});
let d = document.addEventListener('keydown', (g) => {
    console.log(g.key);
});

// 7.1. It is <button id="button 1"> Click </button> and <button id="button 2"> Click </button>  
// 7.2. It is button 1 and button 2