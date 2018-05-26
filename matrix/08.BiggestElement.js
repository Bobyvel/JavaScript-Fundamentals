function biggestElement(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row.forEach(cell => biggestNum = Math.max(biggestNum, cell)));

    console.log(biggestNum);
}

biggestElement([[20, 50, 10], [8, 33, 145]]);
