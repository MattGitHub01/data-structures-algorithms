function createNode(value, next) {
    value = null,
    next = null
    return { value, next }
}

function LinkedList() {
    let list = [];

    const append = (value) => {
        const newNode = createNode();
        newNode.value = value;
        list.push(newNode);
        if (list.length > 1) {
            list[list.length - 2].next = list.length - 1;
        }
    };

    const prepend = (value) => {
        const newNode = createNode();
        newNode.value = value;
        list.unshift(newNode);
        if (list.length > 1) {
            list[0].next = 1;
        }
    };

    const size = () => {
        console.log(list.length);
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
        const newNode = createNode();
        newNode.value = value;
        list.splice(index, 0, newNode);
        if (list.length > 1) {
            // is there an Tail Node to my left?
                // if so, make next = list.length - 1;
            // is there a node to my right?
                // point me at node to right
                // right node tail node? (Y/N)
                    // Y: TailNode.next = null
                    // N: Node.next++
        }
    };

    const removeAt = (index) => {

    };
    return { list, append, prepend, size, head, tail, at, pop, contains, find, tostring, insertAt, removeAt }
}

const test = createNode();
test.value = 'x';
test.next = 'y';
console.log(test)