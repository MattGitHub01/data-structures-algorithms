function createNode(value, next) {
    value = null,
    next = null
    return { value, next }
}

function linkedList() {
    let headNode = null;
    let prevNode = null;
    let length = 0;

    const append = (value) => {
        let node = createNode();
        node.value = value;
        length++;
        if (headNode === null) {
            headNode = node;
        } else {
            prevNode.next = node;
        }
        prevNode = node;

    };

    const prepend = (value) => {
        const node = createNode();
        node.value = value;
        list.unshift(node);
        if (list.length > 1) {
            list[0].next = 1;
        }
    };

    const size = () => {
        console.log(length);
    };

    const head = () => {
        console.log(list[0]);
    };

    const tail = () => {
        console.log(list[list.length - 1]);
    };

    const at = (index) => {
        console.log(list[index]);
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