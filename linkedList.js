function createNode(value, next) {
    value = null,
    next = null
    return { value, next }
}

function linkedList() {
    let headNode = null;
    let tailNode = null;
    let length = 0;

    const append = (value) => {
        let node = createNode(value);
        length++;
        if (headNode === null) {
            headNode = node;
        } else {
            tailNode.next = node;
        }
        tailNode = node;
    };

    const prepend = (value) => {
        const node = createNode(value);
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
        if (index <= length) {
            let atCheck = headNode;
            while (index > 0) {
                atCheck = atCheck.next;
                index--;
            }
            return atCheck
        }
    };

    const pop = () => {
        let popLength = length;
        let popNode = headNode;
        let newTail = null;
        while (popNode.next !== null) {
            if (popLength == 2) {
                newTail = popNode;
            }
            popNode = popNode.next;
            popLength--;
        }
        if (popNode.next === null) {
            tailNode = newTail;
        }
    };

    const contains = (value) => {
        let containNode = headNode;
        let containVal = false;
        while (containNode.next !== null) {
            if (containNode.value === value) {
                containVal = true;
            }
            containNode = containNode.next;
        }
        return containVal
    };

    const find = (value) => {
        let findNode = headNode;
        let findVal = 0;
        let returnVal = null;
        while (findNode.next !== null) {
            if (findNode.value === value) {
                returnVal = findVal;
            }
            findVal++;
            findNode = findNode.next;
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
        while (insertNum >= 0) {
            if (insertNum === 2) {
                beforeNode = nodeCount;
            }
            if (insertNum === 0) {
                beforeNode.next = nodeCount;
                return
            }
            removeNum--;
        }
    };
    return { list, append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt }
}