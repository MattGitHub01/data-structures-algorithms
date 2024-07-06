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
        let list = [];
        let strNode = headNode;
        if (typeof strNode.next === undefined) {
            return `Error: no saved nodes`
        }
        if (strNode.next == null) {
            list.push(strNode);
            return JSON.stringify(list)
        }
        while (strNode.next !== null) {
            list.push(strNode);
            strNode = strNode.next;
        }
        return JSON.stringify(list[0])
    };

    const insert2 = function(value, index) {
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
        prevN = at(index);
        nextN = at(index + 1);
        prevN.next = node;
        node.next = nextN;
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
        index = index - 1;
        let prevNodeCount = index - 2;
        let prevNode = null;
        let nextNodeCount = index;
        let nextNode = null;
        let node = createNode();
        node.value = value;
        let countNode = headNode;
        while (index >= 0) {
            console.log('TEST');
            console.log(countNode);
            if (index === prevNodeCount) {
                prevNode = countNode;
            }
            if (index === nextNodeCount) {
                nextNode = countNode;
                console.log('wtf');
                console.log(nextNode);
            }
            countNode = countNode.next;
            index--;
        }
        prevNode.next = node;
    };

    const removeAt = function(index) {
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
    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insert2, removeAt }
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

listOne.insert2('test', 3);

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