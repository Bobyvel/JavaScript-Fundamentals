function  findPosition(arr) {
    let result = [];
    for (let i = 0; i < arr.length ; i+=2) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}

findPosition(['20', '30', '40']);
findPosition(['5', '10']);