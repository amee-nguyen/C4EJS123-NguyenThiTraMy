// 1. for and Object

// Run the following code, observe and then answer the questions

const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};

for (let x in product) {
    console.log(x);
}
// 1.1. What does x receives from product, property or value?
//     - x receives property from product.

// 1.2. Use the for loop to print/log out the following output

for (let item in product) {
    if (product.hasOwnProperty(item)) {
        console.log(`${item} : ${product[item]}`);
    }
}

// 2. Then use one line of code to destructure to obtain subject, dueDate and assignTo from this object:

const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};
var { subject, dueDate, assignTo } = task;