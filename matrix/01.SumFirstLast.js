function  sum(arr) {
    arr = arr.map(Number);
    let sum = arr[0] + arr[arr.length -1];
    console.log(sum);

}

sum(['20', '30', '40']);