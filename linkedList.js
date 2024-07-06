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
        if (headNode !== null) {
            let tailCheck = headNode;
            while (tailCheck.next !== null) {
                tailCheck = tailCheck.next;
            }
            return tailCheck
        } else {
            return null
        }
    };

    const at = (index) => {
        if (index <= length) {
            let atCheck = headNode;
            while (index > 0 && atCheck.next !== null) {
                atCheck = atCheck.next;
                index--;
            }
            return atCheck
        } else {
            return null
        }
    };

    const pop = () => {
        list.pop();
    };

    const contains = (value) => {
        console.log(list.some((node) => {
            let check = node.value;
            return check === value
    }));
    };

    const find = (value) => {
        console.log(list.findIndex((node) => {
            let check = node.value;
            return check === value
    }));
    };

    const tostring = () => {
        console.log(JSON.stringify(list));
    };

    const insertAt = (value, index) => {
        const node = createNode();
        node.value = value;
        list.splice(index, 0, node);
        if (list.length > 1) {
            if (index == (list.length - 1)) {
                list[list.length - 2].next = index;
            }
            if (index < list.length - 1) {
                node.next = index + 1;
                if (list[index + 1].next !== null) {
                    let counter = index;
                    while (counter < (list.length - 2)){
                        list[counter + 1].next++;
                        counter++;
                    }
                }
            }
        }
    };

    const removeAt = (index) => {
        if (list.length > 1) {
            if (index == list.length - 1) {
                list[index - 1].next = null;
            }
            if (index < (list.length - 2)) {
                let counterTwo = index;
                while(counterTwo < (list.length - 2)) {
                    counterTwo++;
                    list[counterTwo].next--;

                }
            }
        }
    list.splice(index, 1);
    };
    return { list, append, prepend, size, head, tail, at, pop, contains, find, tostring, insertAt, removeAt }
}