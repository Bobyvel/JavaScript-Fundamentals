function fillMatrix(rows, cols) {
    let counter = 1;
    let matrix = [];

    for (let i = 0; i < rows; i++) { //create matrix
        matrix[i] = [];
    }
    let startRowIndex = 0, startColIndex = 0, endRowIndex = rows - 1, endColIndex = cols - 1;
    while (startRowIndex <= endRowIndex || startColIndex <= endColIndex) {
        for (let i = startRowIndex; i <= endColIndex; i++) { //first row cells
            matrix[startRowIndex][i] = counter;
            counter++;
        }
        for (let i = startRowIndex + 1; i <= endRowIndex; i++) { //last cells in rows - 1
            matrix[i][endColIndex] = counter;
            counter++;
        }
        for (let i = endColIndex - 1; i >= startColIndex; i--) { //bottom cells in last row
            matrix[endRowIndex][i] = counter;
            counter++;
        }
        for (let i = endRowIndex - 1; i > startRowIndex; i--) { //first cells in row - 2
            matrix[i][startRowIndex] = counter;
            counter++;
        }
        startRowIndex++;
        startColIndex++;
        endRowIndex--;
        endColIndex--;
    }
    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

fillMatrix(5, 5);