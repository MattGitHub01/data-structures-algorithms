import { linkedList } from './linkedList.js';

function hashMap() {
    const hashMap = new Array(16).fill(null).map(() => []);
    const length = 0;

    // Hashing algorithm to create keys
    const hash = function(key) {
        let hashCode = 0;
        const prime = 83;

        for (let i = 0; i < key.length; i++) {
            hashCode = prime * hashCode + key.charCode(i);
        }
        
        return hashCode
    }
    // Set key / value pairs
    const set = function(key, value) {
        let index = hash(key);
        let newInpt = [index, value];
        for (bucket in bucketMap) {
            if (bucket[0] === index && value !== bucket[1]) {
                let bList = linkedList();
                bList.append(value);
                bList.append(bucket[1]);
                bucket[1] = bList;
            }
        }
        hashMap.push(newInpt);
        size++;
    }

    const get = function(key) {
        let index = hash(key);
        for (bucket in bucketMap) {
            if (bucket[0] === index) {
                return bucket[1]
            }
        }
        return null
    }

    const has = function(key) {

    }

    return { hash, set, has, }
}