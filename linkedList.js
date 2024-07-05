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
            if (index == (list.length - 1)) {
                list[list.length - 2].next = index;
            }
            if (index < list.length - 1) {
                newNode.next = index + 1;
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