// A-1

function arr(inputArray) {
    let longest = Math.max(...inputArray.map(({length}) => length));
    return inputArray.filter(({length}) => length === longest);
  }
console.log(arr(['BINH', 'HUNG','PHUOC','CAO', 'KHANH']));

// A-2

let array = [60, 40, 55, 75, 64];

const { even, odd } = array.reduce((acc, val, index) => {
    const key = index % 2 ? 'odd' : 'even';
    return {
       ...acc,
       [key]: acc[key].concat(val),
    };
}, { odd: [], even: [] });

function sumArray(a, b) {
    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}
console.log(sumArray(even, odd));

// B

function changeColor() {
    var x;
    x = document.getElementById('backgr-color').value;
    document.body.style.backgroundColor = x;
}

function hexeName() {
    var y;
    y = document.getElementById('backgr-color').value;
    document.getElementById('hexaName').innerHTML = y;
}

function ChangeC() {
    var z;
    z = document.getElementById('changeC').value;
    document.body.style.backgroundColor = z;
}
