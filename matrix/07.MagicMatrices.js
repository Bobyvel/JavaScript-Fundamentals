function magicalMatrix(matrix) {

    let sumCheck = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        let sumRows = 0;
        for (let col = 0; col < matrix[row].length; col++) {

            sumRows += matrix[row][col];
        }
        if (sumRows != sumCheck) {
            isMagic = false;
        }
    }

    for (let col = 0; col < matrix.length; col++) {
        let sumCols = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCols += matrix[row][col];
        }
        if (sumCols != sumCheck) {
            isMagic = false;
        }
    }


    console.log(isMagic);

}

magicalMatrix([[4, 5, 6],
               [6, 5, 4],
                [5, 5, 5]]);