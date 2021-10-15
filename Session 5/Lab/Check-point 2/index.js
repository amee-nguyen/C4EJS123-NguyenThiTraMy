// 2.1. Write a program to count the occurrences of the words

let arr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let count = {};
for (let item of arr) {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
}
console.log(count);

// 2.2. Create and array to store a list of laptops in inventory, the data is as follow

const inventory = [{
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7
    }
]

// 2.3. The above data is good to deal with all of the laptops equally, but when it comes to grouping the items by brand, it should be reshaped as below. Write a program to do the reshaping from inventory, from now, use the reshaped data to process

let brandList = [];

for (let laps of inventory) {
    if (!brandList.includes(laps.brand)) {
        brandList.push(laps.brand);
    }
}
let inventoryByBrand = {};
for (let x of brandList) {
    inventoryByBrand[x] = [];
}
for (let i = 0; i < inventory.length; i++) {
    const laptop = inventory[i];
    inventoryByBrand[laptop.brand].push(laptop);
}

console.log(inventoryByBrand);

// 2.4. From inventoryByBrand, write a program to count the generations of a certain brand in the inventory

let brandLap = prompt('Which brand?');

for (let brand in inventoryByBrand) {
    if (brandLap.toLowerCase() == brand.toLowerCase()) {
        alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()} in inventory'`);
    }
}

// 2.5. Add more details in the statistics

let listName = {}
for (let x of brandList) {
    listName[x] = [];
}

for (let i = 0; i < inventory.length; i++) {
    const laptop = inventory[i];
    listName[laptop.brand].push(laptop.name);
}
console.log(listName);

let lap = prompt('Which brand?');
for (let brand in inventoryByBrand) {
    if (lap.toLowerCase() == brand.toLowerCase()) {
        alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()} in inventory \n${listName[brand].join('\n')}`);
    }
}

// 2.6. Add more++ details in the statistics (30000 + 9300 * 12 + 8600 * 2 => 158800)

let totalCost = {}
for (let x of brandList) {
    totalCost[x] = [];
}
for (let i = 0; i < inventory.length; i++) {
    const laptop = inventory[i];
    let total = 0;
    total += laptop.price * laptop.quantity;
    totalCost[laptop.brand].push(total);
}

console.log(totalCost);

let cost = {};
for (let x of brandList) {
    cost[x] = [];
}
for (let i = 0; i < inventory.length; i++) {
    const laptop = inventory[i];
    let total = 0;
    for (let k = 0; k < totalCost[laptop.brand].length; k++) {
        total += totalCost[laptop.brand][k];
    }
    cost[laptop.brand].push(total);
}

console.log(cost);

// 2.7. Better concurrency display Google 'JS toLocaleString'

let laptop = prompt('Which brand?');
for (let brand in inventoryByBrand) {
    if (laptop.toLowerCase() == brand.toLowerCase()) {
        alert(`There are ${inventoryByBrand[brand].length} generations of '${brand.toUpperCase()} in inventory \n${listName[brand].join('\n')} \nWith total value: ${cost[brand][0]}K`);
    }
}