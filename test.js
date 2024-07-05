let list = [{value: 'x', next: 1}, {value: 'x', next: 2}, {value: 'y', next: 3}, {value: 'x', next: null}];

function check(value) {
    console.log(list.findIndex((node) => {
        let check = node.value;
        return check === value
    }))
}

check('y')