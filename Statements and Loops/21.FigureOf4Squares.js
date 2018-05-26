function fugurePrint(number) {

    let sidesBorder = '-'.repeat(number-2);
    let sidesInner = ' '.repeat(number-2);
    let colsCount = number % 2 == 0 ? number -1 : number;
    let innerPart = number > 4 ? (colsCount - 3) / 2 : 0;
    let row = '';

    for (let i = 0; i < colsCount- innerPart*2 ; i++) {
        row += `+${sidesBorder}+${sidesBorder}+\n`;

        if (i != (colsCount- innerPart*2)-1) {
            for (let i = 0; i < innerPart; i++) {
                row += `|${sidesInner}|${sidesInner}|\n`;
            }
        }
    }

    console.log(row);
}



fugurePrint(2);
fugurePrint(3);
fugurePrint(4);
fugurePrint(5);
fugurePrint(6);
fugurePrint(7);