import { linkedList } from './linkedList.js';

function hashMap() {
    let initSize = 16;
    let hashMap = new Array(initSize).fill(null).map(() => []);
    let arrLength = 0;
    let loadFactor = .8;

    // Hashing algorithm to create keys
    const hash = function(key) {
        let hashCode = 0;
        const prime = 83;

        for (let i = 0; i < key.length; i++) {
            hashCode = prime * hashCode + key.charCode(i);
        }
        
        return hashCode
    }

    const resize = function() {
        let oldMap = entries();
        initSize = initSize * 2;
        hashMap = new Array(initSize);
        for (let bucket in oldMap) {
            hashMap.push(bucket);
        }
    }

    // Set key / value pairs
    const set = function(key, value) {
        let index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
          }
        let newInpt = [index, value];
        let bList = linkedList();
        for (let bucket in bucketMap) {
            if (bucket[0] === index && (bucket[1] !== bList && value !== bucket[1])) {
                bList.append(value);
                bList.append(bucket[1]);
                bucket[1] = bList;
            }
        }
        hashMap.push(newInpt);
        arrLength++;

        if (arrLength / hashMap.length > loadFactor) {
            resize()
        }
    }

    // Return value at a key
    const get = function(key) {
        let index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
          }
        for (let bucket in bucketMap) {
            if (bucket[0] === index) {
                return bucket[1]
            }
        }
        return null
    }

    // Check if key exists in bucket array
    const has = function(key) {
        let index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
          }
        for (let bucket in bucketMap) {
            if (bucket[0] === index) {
                return true
            }
        }
        return false
    }

    // Remove a bucket from bucket array
    const remove = function(key) {
        let index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
          }
        for (let bucket in bucketMap) {
            if (bucket[0] === index) {
                bucketMap.splice(bucket, 1);
                arrLength--;
                return true
            }
        }
        return false
    }

    // Returns number of buckets
    const length = function() {
        return size
    }

    // Delete all entries and reset hashMap
    const clear = function() {
        hashMap = new Array(16).fill(null).map(() => []);
    }

    // Return array of all keys in hash map
    const keys = function() {
        let result = [];
        for (let bucket of bucketMap) {
            result.push(bucket[0]);
        }
        return result
    }

    // Return array of values in hash map
    const values = function() {
        let result = [];
        for (let bucket of bucketMap) {
            result.push(bucket[1]);
        }
        return result
    }

    const entries = function() {
        let entries = [];
        for (let bucket in hashMap) {
            entries.push(bucket);
        }
        return entries
    }

    return { hash, set, get, has, remove, length, clear, keys, values, entries}
}