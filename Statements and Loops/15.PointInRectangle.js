function pointIn(input) {

    let [x, y, xMin, xMax, yMin, yMax ] = input; //destructuring assignment
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax){
        console.log('inside');
    }else {
        console.log('outside');
    }
}

pointIn([8, -1, 2, 12, -3, 3]);