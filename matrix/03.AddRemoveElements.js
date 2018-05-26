function changeArr(arr) {
    let counter = 0;
    let stopLoop = arr.length;
    for (let i = 0; i < arr.length; i++) {
        counter++;

        if (arr[i] == 'add') {
            arr.push(counter);
            arr.splice(i, 1);
            i--;
        } else if (arr[i] == 'remove') {

            if (arr[arr.length-1] != 'add' && arr[arr.length-1] != 'remove' ) {
                arr.pop();
            }
            arr.splice(i, 1);
            i--;
            if (stopLoop == counter) {
                break;
            }

        }

    }
    if (arr.length > 0) {
        console.log(arr.join('\n'));
    } else {
        console.log('Empty');
    }
}

changeArr(['remove','add', 'add', 'add','add']);
//changeArr(['remove','remove','remove']);
//changeArr(['remove']);
//changeArr(['add', 'add', 'remove', 'remove', 'add','add','remove']);