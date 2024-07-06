function createNode(value, next) {
    value = null,
    next = null
    return { value, next }
}

function linkedList() {
    let headNode = null;
    let tailNode = null;
    let length = 0;

    const append = function (value) {
        let node = createNode();
        node.value = value;
        length++;
        if (headNode === null) {
            headNode = node;
        } else {
            tailNode.next = node;
        }
        tailNode = node;
    };

    const prepend = (value) => {
        const node = createNode();
        node.value = value;
        node.next = headNode;
        headNode = node;
        if (tailNode === null) {
            tailNode = node;
        }
        length++;
    };

    const size = () => {
        return length
    };

    const head = () => {
        return headNode
    };

    const tail = () => {
        return tailNode
    };

    const at = (index) => {
        if (index <= length && index > 0) {
            let atCheck = headNode;
            index--;
            while (index > 0) {
                atCheck = atCheck.next;
                index--;
            }
            return atCheck
        } else {
            return `Error: Position does not exist`
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

    const contains = (value) => {
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

    const find = (value) => {
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

    const toString = () => {
        let list = [];
        let strNode = headNode;
        while (strNode.next !== null) {
            let curNodeStr = JSON.stringify(strNode);
            list.push(curNodeStr);
            strNode = strNode.next;
        }
        return JSON.stringify(list)
    };

    const insertAt = (value, index) => {
        if (index === length) {
            append()
            return
        }
        if (index === 1) {
            prepend()
            return
        }
        let node = createNode(value);
        let countNode = headNode;
        let insertNum = index;
        while (insertNum >= 0) {
            if (insertNum === 2) {
                countNode.next = node;
            }
            if (insertNum === 1) {
                node.next = countNode;
                return
            }
            insertNum--;
        }
    };

    const removeAt = (index) => {
        let nodeCount = headNode;
        let beforeNode = null;
        let removeNum = index;
        while (removeNum >= 0) {
            if (removeNum === 2) {
                beforeNode = nodeCount;
            }
            if (removeNum === 0) {
                beforeNode.next = nodeCount;
                return
            }
            removeNum--;
        }
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

console.log(listOne.find('a'));

console.log(listOne.find('b'));

console.log(listOne.find('c'));

console.log(listOne.find('d'));

console.log(listOne.find('e'));

/*
NOT WORKING/UNTESTED:




console.log(listOne.toString());

console.log(listOne.insertAt());

console.log(listOne.removeAt(2));

WORKING:
console.log(listOne.contains('e'));

listOne.append('testAppend2')

listOne.prepend('testPrepend3')

console.log(listOne.head());

console.log(listOne.tail());

console.log(listOne.size());

console.log(listOne.at());

console.log(listOne.pop());

*/