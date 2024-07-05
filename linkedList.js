function LinkedList() {
    this.list = [];
}

const newList = LinkedList();

function Node(value, nextNode) {
    this.value = null,
    this.nextNode = null,

    this.append(value) = () => {
        const newNode = new NewNode(value);
        newList.push(newNode);
    },
    this.prepend(value) = () => {
        const newNode = new Node(value);
        newList.unshift(newNode);
    }
}