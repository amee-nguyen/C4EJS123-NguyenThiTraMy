// 8. Write a function, using alert to show your name and one thing you wish to do this year
function hiMy() {
    alert('Do not wish anything, please try your best! Can you hear me?');
}
hiMy();

// 9-10.

function hi(name, wish) {
    alert(`${name} ${wish}`);
}
let userName = prompt('Enter your name:');
let userWish = prompt('What do you wanna get?');
if (userWish == "") {
    alert(`${userName} nothing`);
} else {
    hi(userName, userWish);
};

// 11.
let v = document.getElementById('upper');
console.log(v);
v.addEventListener('click', (c) => {
    console.log(c.target);
    let userName = document.getElementById('nameInput').value;
    console.log(userName);
    userName = String(userName).toUpperCase();
    console.log(userName);
    let r = document.getElementById('result');
    console.log(r);
    r.textContent = String(userName);
})