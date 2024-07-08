const linkedList = require('./linkedList.js')

function hashMap() {
    let initSize = 16;
    let hashMap = new Array(initSize).fill(null).map(() => []);
    let list = linkedList.func();
    let arrLength = 0;
    let loadFactor = .8;

    // Hashing algorithm to create keys
    const hash = function(key) {
        let hashCode = 0;
        const prime = 11;

        for (let i = 0; i < key.length; i++) {
            hashCode = prime * hashCode + (key.charCodeAt(i) *2);
            hashCode = hashCode % 16;
        }
        
        return hashCode
    }

    const resize = function() {
        let oldMap = entries();
        initSize = initSize * 2;
        hashMap = new Array(initSize);
        for (let bucket of oldMap) {
            hashMap.push(bucket);
        }
    }

    // Set key / value pairs
    const set = function(key, value) {
        let index = hash(key);

        //Loop through buckets
        for (let i = 0; i < arrLength; i++) {
            // if there is already a bucket with the same key
            let bucket = hashMap[i];
            console.log(hashMap[i])
            if (bucket[0] === index) {
                list.append(value);
                hashMap.splice(count, 1);
                // replace the old value with a linked list
                bucket[1] = list;
                // add the old value first to the linked list
                list.append(oldVal);
                // add the new value second to the linked list
                // DO NOT increase length because there isn't an extra bucket
            }
        }

        let newInpt = [index, list.append(value)];
        hashMap.push(newInpt);
        arrLength++;
        if (arrLength / hashMap.length > loadFactor) {
            resize()
        }
    }

    // Return value at a key
    const get = function(key) {
        let index = hash(key);
        for (let bucket of hashMap) {
            if (bucket[0] === index) {
                return bucket[1]
            }
        }
        return null
    }

    // Check if key exists in bucket array
    const has = function(key) {
        let index = hash(key);
        for (let bucket of hashMap) {
            if (bucket[0] === index) {
                return true
            }
        }
        return false
    }

    // Remove a bucket from bucket array
    const remove = function(key) {
        let index = hash(key);
        let count = -1;
        for (let bucket of hashMap) {
            count++;
            if (bucket[0] === index) {
                hashMap.splice(count, 1)
                arrLength--;
                return true
            }
        }
        return false
    }

    // Returns number of buckets
    const length = function() {
        return arrLength
    }

    // Delete all entries and reset hashMap
    const clear = function() {
        hashMap = new Array(16).fill(null).map(() => []);
        arrLength = 0;
    }

    // Return array of all keys in hash map
    const keys = function() {
        let result = [];
        for (let bucket of hashMap) {
            let k = bucket[0];
            if (k !== undefined) {
                result.push(k);
            }
        }
        return result
    }

    // Return array of values in hash map
    const values = function() {
        let result = [];
        for (let bucket of hashMap) {
            let val = bucket[1];
            if (val !== undefined) {
                result.push(val);
            }
        }
        return result
    }

    const entries = function() {
        let entries = [];
        for (let bucket of hashMap) {
            if (bucket[0] !== undefined) {
                let entry = [bucket[0], bucket[1]];
                entries.push(entry);
            }
        }
        return entries
    }

    return { hash, set, get, has, remove, length, clear, keys, values, entries}
}


const test = hashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

//TESTING / NOT WORKING

console.log(test.entries())
console.log(test.length())

//TESTED: WORKING + .set() above
// console.log(test.get('hat'))
// console.log(test.clear())
// console.log(test.length())
// console.log(test.entries())
// console.log(test.keys())

// BUGS / NOT WORKING AS INTENDED:
// console.log(test.values())
// console.log(test.has('testnot')) 
// console.log(test.hash('anything')) 