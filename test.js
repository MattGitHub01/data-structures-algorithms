const linkedList = require('./linkedList.js')

let arr = [['good', 'dog'], ['test', 'horse']];
let list = linkedList.func();


function run() {
    make('test', 'cat');
    console.log(arr[1])
    make('test', 'dog');
    console.log(arr[1])
    make('TESTING', 'TESTING');
    console.log(arr[1])
    make('test', 'parrot');
    console.log(arr[1])
    console.log(list.size())
    console.log(list.at(1))
    console.log(list.at(2))
    console.log(list.at(3))
    console.log(list.head())
    console.log(list.toString())
    console.log(arr);
}
function make(a, b) {
    let count = 0;
    for (bucket of arr) {
        if (bucket[0] === a) {
            arr.splice(count, 1);
            let val = [a, list.append(b)];
            arr.push(val);
            return
        }
        count++;
    }
    let val = [a, list.append(b)];
    arr.push(val);
    return

}

run()