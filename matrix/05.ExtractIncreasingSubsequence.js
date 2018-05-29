function arrayFilter(arr) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    let result = [];
    for (let i = 0; i < arr.length ; i++) {

        if (arr[i] >= biggestNum){
            biggestNum = arr[i];
            result.push(biggestNum);
        }
    }

    console.log(result.join('\n'));
}

arrayFilter([1, 3, 8, 4, 10, 12, 3, 2, 24]);