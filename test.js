let list = [{value: 'a', next: 1}, {value: 'b', next: 2}, {value: 'c', next: 3}, {value: 'd', next: 4}, {value: 'e', next: 5}, {value: 'f', next: 6}, {value: 'g', next: 7}, {value: 'h', next: null}];  
//index = 4 && list.length = 5 after add obj, 
function createNode(value, next) {
    value = null,
    next = null
    return { value, next }
}

function insertAt(value, index) {
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
                // make all nodes from right node to end next increase by 1
                }
            }
        }
    }
};
function removeAt(index) {
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
}
function tostring() {
    console.log('  ||  PRINT CMMD: ' + JSON.stringify(list));
};
tostring()
removeAt(2)
tostring()
removeAt(0)
tostring()
removeAt(list.length - 1)
tostring()

