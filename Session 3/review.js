// REVIEW
// 4. Write a script to simulate a clothes shop, asking and performing certain tasks from users
let choice = ['R', 'C', 'U', 'D'];
let item = ['Jeans', 'T-shirt', 'Socks'];
while (true) {
    let noti = String(prompt('Hi there, welcome to shop admin panel, what do you want? (R, C, U, D)'));

    if (noti != choice[0] && noti != choice[1] && noti != choice[2] && noti != choice[3]) {
        alert(`This command is not supported!`);

    } else if (noti == choice[0]) {
        console.log('The item list are:')
        for (let i = 0; i < items.length; i++) {
            alert(`The item list are: \n ${i+1}. ${items[i]}`);
        };

    } else if (noti == choice[1]) {
        let enterItem = String(prompt('Enter the name of the new item'));
        item.push(enterItem);
        alert(`Done!`);

    } else if (noti == choice[2]) {
        let upateItem = String(prompt('Enter the position you want to update'));
        let newItem = String(prompt('Enter the new name'));
        item[newItem] = upateItem;
        alert(`Done!`);

    } else if (noti == choice[3]) {
        let enter_delete_Item = String(prompt('Enter the position you want to delete'));
        item.splice(enter_delete_Item, 1);
        alert(`Done!`);
    }
}