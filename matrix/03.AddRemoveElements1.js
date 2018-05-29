function changeArr(arr) {
    let result = [];
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        counter++;

        if (arr[i] == 'add') {
            result.push(counter);
        } else {
            result.pop();
        }

    }

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

//changeArr(['add', 'add', 'remove', 'remove', 'add','add','remove']);
//changeArr(['remove','remove','remove']);
//changeArr([]);
changeArr(['remove','add', 'add', 'add','add']);