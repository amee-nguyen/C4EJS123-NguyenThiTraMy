// 4. Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table

const dictionary = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: "The formal word for 'error'",
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}

//  4.1. Write a script to simulate the lookup of the dictionary initialized in the previous example

while (true) {
    alert('Hi there, this is dev dictionary');

    // 4.2. Update your script so that it can let users contribute the explanation to the dictionary

    let keys = prompt('Enter a keyword');
    if (dictionary.hasOwnProperty(keys)) {
        alert(dictionary[keys]);
        break;
    } else if (keys != dictionary) {
        let keysDetail = prompt(`We could not find your word: ${keys}, leave your explanation`);
        alert('Done');
        alert(`${keys}\n${keysDetail}`);
        break;
    }
}

// 5. Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color

const product = [{
        Name: 'Xiaomi portable charger 20000mah',
        Brand: ' Xiaomi ',
        Price: 428,
        Colour: 'White',
        Category: 'Charger',
    },
    {
        Name: 'VSmart Active 1',
        Brand: 'VSmart',
        Price: 5487,
        Colour: 'Black',
        Category: 'Phone',
    },
    {
        Name: 'IPhone X',
        Brand: 'Apple',
        Price: 21490,
        Colour: 'Gray',
        Category: 'Phone',
    },
    {
        Name: 'Samsung Galaxy A9',
        Brand: 'Samsung',
        Price: 8490,
        Colour: 'Blue',
        Category: 'Phone',
    },
];

// 5.1. Print/log name and price of all the products out 

for (let i = 0; i < product.length; i++) {
    console.log(`#${i+1} ${product[i].Name}`);
    console.log(`${Object.keys(product[i])[2]} : ${product[i].Price}`);
}

// 5.2. Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users

for (let i = 0; i < product.length; i++) {
    let idNumber = i + 1;
    console.log(`#${idNumber} ${product[i].Name}`);
    console.log(`${Object.keys(product[i])[2]} : ${product[i].Price}`)
}