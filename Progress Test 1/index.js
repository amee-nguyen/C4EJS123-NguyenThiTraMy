// Bài 1

let str_input = "program";
let x = " ";
for (let i = str_input.length - 1; i >= 0; i--) {
    x += str_input[i];
}
alert(x);

// // Bài 2

let str = "this is Test";
let str1 = str.charAt(0).toUpperCase() + str.slice(1);
alert(str1);

// // Bài 3

let arr = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];
let newArr = [];
for (let i of arr) {
    if (newArr.indexOf(i) == -1) {
        newArr.push(i);
    }
}
alert(newArr);

// Bài 4

let employee = [{
        Name: 'Nguyen Thi Tra My',
        Age: 20,
        Salary: 1000000,
        Position: 'Direction',
    },
    {
        Name: 'Dinh Phuong Thi',
        Age: 21,
        Salary: 200000,
        Position: 'Product Manager',
    },
    {
        Name: 'Nguyen Quang Thinh',
        Age: 20,
        Salary: 200000,
        Position: 'Generalinchief',
    }
]

for (let i = 0; i < employee.length; i++) {
    console.log(`Name: ${employee[i].Name}`);
    console.log(`Age: ${employee[i].Age}`);
    console.log(`Salary: ${employee[i].Salary}`);
    console.log(`Position: ${employee[i].Position}`);
}

while (true) {
    let updateEmp = prompt('Hi there, this is our employee');
    if (employee.hasOwnProperty(updateEmp)) {
        alert(employee[updateEmp]);
        break;
    } else {
        let details = prompt(`Enter new employee to update`);
        employee[updateEmp] = details;
    }

}

let user = prompt('Do you wanna delete item? Enter "Y" is yes, "N" if no');

if (user == "Y") {
    let item = prompt('Enter employee you want to delete')
    for (let i = 0; i < employee.length; i++)
        if (employee[i] === item) {

        }
}
// Bài 5

let checkDate = prompt('Enter date');
let year, month, days = checkDate.split('/');
if (year >= 1900 && year <= 9999) {
    if (month >= 1 && month <= 12) {
        if ((days >= 1 && days <= 31) && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 | month == 12)) {
            alert("Date is valid");
        } else if ((days >= 1 && days <= 30) && (month == 4 || month == 6 || month == 9 || month == 11)) {
            alert('Date is valid');
        } else if (days == 29 && month == 2 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))) {
            alert('Date is valid.');
        } else {
            alert('Day is invalid');
        }

    } else {
        alert('Month is invalid');
    }

} else {
    alert('Year is invalid.');
}