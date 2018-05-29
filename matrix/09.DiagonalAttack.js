function changeMatrix(matrix) {

    matrix = matrix.map(r => r.split(' ').map(Number));

    let sumLeft = 0; let sumRight = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumLeft += matrix[i][i];
        sumRight += matrix[i][matrix.length - 1 - i];
    }

    if (sumLeft === sumRight){

        for (let row = 0; row < matrix.length; row++) {
            for (let coll = 0; coll < matrix.length; coll++) {

                if (row != coll && coll != matrix.length -1 - row){

                    matrix[row][coll] = sumLeft;
                }

            }
        }
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

// changeMatrix(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']
// );

changeMatrix(['1 1 1',
    '1 1 1',
    '1 1 0']
);