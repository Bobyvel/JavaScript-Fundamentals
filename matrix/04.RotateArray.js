function ritateArr(arr) {
let rotation = Number(arr.pop());

if (rotation % arr.length != 0){

    for (let i = 0; i < rotation; i++) {

        let currentRotation = arr.pop();
        arr.unshift(currentRotation);
    }


}
    console.log(arr.join(' '));

}

ritateArr([1,2,3,4,4]);