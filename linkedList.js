function createNode(value, next) {
    value = null,
    next = null
    return { value, next }
}

function LinkedList() {
    let list = [];

    this.append(value) = () => {
        const newNode = createNode();
        newNode.value = value;
        list.push(newNode);
        if (list[list.length - 2] !== undefined) {
            list[list.length - 2].next = list.length - 1;
        }
    },
    this.prepend(value) = () => {
        const newNode = createNode();
        list.unshift(newNode);
    }
    this.size() = () => {
        console.log(list.length)
    }
}

const test = createNode();
test.value = 'x';
test.next = 'y';
console.log(test)