function createNode(value, next) {
    value = null,
    next = null
    return { value, next }
}

function LinkedList() {
    let list = [];

    this.append = (value) => {
        const newNode = createNode();
        newNode.value = value;
        list.push(newNode);
        if (list.length > 1) {
            list[list.length - 2].next = list.length - 1;
        }
    },

    this.prepend = (value) => {
        const newNode = createNode();
        newNode.value = value;
        list.unshift(newNode);
        if (list.length > 1) {
            list[0].next = 1;
        }
    },

    this.size = () => {
        console.log(list.length);
    },

    this.head = () => {
        console.log(list[0]);
    },

    this.tail() = () => {
        console.log(list[list.length - 1]);
    },

    this.at = (index) => {
        console.log(list[index]);
    },

    this.pop = () => {
        list.pop();
    },

    this.contains = (value) => {
        console.log(list.some((node) => {
            let check = node.value;
            return check === value
    }));
    },

    this.find = (value) => {
        console.log(list.findIndex((node) => {
            let check = node.value;
            return check === value
    }));
    },

    this.toString = () => {
        
    }
}

const test = createNode();
test.value = 'x';
test.next = 'y';
console.log(test)