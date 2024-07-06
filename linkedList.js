function createNode(value, next) {
    value = null,
    next = null
    return { value, next }
}

function linkedList() {
    let headNode = null;
    let tailNode = null;
    let length = 0;

    const append = function(value) {
        let node = createNode();
        node.value = value;
        length++;
        if (headNode === null) {
            headNode = node;
        } else {
            tailNode.next = node;
        }
        tailNode = node;
        return node
    };

    const prepend = function(value) {
        const node = createNode();
        node.value = value;
        node.next = headNode;
        headNode = node;
        if (tailNode === null) {
            tailNode = node;
        }
        length++;
        return node
    };

    const size = function() {
        return length
    };

    const head = function() {
        return headNode
    };

    const tail = function() {
        return tailNode
    };

    const at = function(index) {
        if (index <= length && index > 0) {
            let atCheck = headNode;
            index--;
            while (index > 0) {
                atCheck = atCheck.next;
                index--;
            }
            return atCheck
        }
    };

    const pop = function() {
        if (length > 0) {
            let popCount = length - 1;
            let popNode = headNode;
            popCount--;
            while (popCount > 0) {
                popNode = popNode.next;
                popCount--;
            }
            popNode.next = null;
            tailNode = popNode;
            length--;
            return popNode
        }
    }

    const contains = function(value) {
        let containNode = headNode;
        let containVal = false;
        while (containNode.next !== null) {
            if (containNode.value === value) {
                containVal = true;
            }
            containNode = containNode.next;
        }
        if (containNode.value === value) {
            containVal = true;
        }
        return containVal
    };

    const find = function(value) {
        let findNode = headNode;
        let findVal = 1;
        let returnVal = null;
        while (findNode.next !== null) {
            if (findNode.value === value) {
                returnVal = findVal;
            }
            findVal++;
            findNode = findNode.next;
        }
        if (findNode.value === value) {
                returnVal = findVal;
        }
        return returnVal
    };

    const toString = function() {
        let arr = [];
        for (i = 0; i < length; i++) {
            let currNode = at(i);
            arr.push(currNode);
        }
        return JSON.stringify(arr[1]);
    }

    const insertAt = function(value, index) {
        if (index === length) {
            let newTail = append();
            newTail.value = value;
            return
        }
        if (index === 1) {
            let newHead = prepend();
            newHead.value = value;
            return
        }
        let node = createNode();
        node.value = value;
        prevNode = at(index);
        nextNode = at(index + 1);
        prevNode.next = node;
        node.next = nextNode;
    }

    const removeAt = function(index) {
        let prevN = at(index - 1);
        let nextN = at(index + 1);
        if (index === 1) {
            headNode = nextN;
            length--;
        }
        if (index === length) {
            prevN.next = null;
            tailNode = prevN;
            length--;
        }
        prevN.next = nextN;
    };
    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt }
}

// Testing
const listOne = linkedList();



listOne.append('a');



listOne.append('b');



listOne.append('c');



listOne.append('d');



listOne.append('e');

console.log(listOne.toString());
/*
console.log(listOne.head());

console.log(listOne.tail());

console.log(listOne.size());*/

listOne.removeAt(2);

console.log(listOne.toString());
/*
console.log(listOne.head());

console.log(listOne.tail());

console.log(listOne.size());*/


/*
NOT WORKING/UNTESTED:


console.log(listOne.removeAt(2));

WORKING:
console.log(listOne.toString());

console.log(find.toString);

console.log(listOne.contains('e'));

listOne.append('testAppend2')

listOne.prepend('testPrepend3')

console.log(listOne.head());

console.log(listOne.tail());

console.log(listOne.size());

console.log(listOne.at());

console.log(listOne.pop());

*/