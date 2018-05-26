function helixDNA(lenth) {

    let sequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let rowCounter = 0;
    let sequenceCounter = 0;
    for (let j = 0; j < lenth; j ++) {

        rowCounter++;
        rowCounter = rowCounter > 4 ? 1 : rowCounter;
        let row = printRow(rowCounter, sequenceCounter);
        console.log(row);

        sequenceCounter += 2;
    }

    function printRow(rowCounter, sequenceCounter) {

        let index = sequenceCounter % 10;
        switch (rowCounter) {

            case 1:
                return `**${sequence[index] + sequence[index + 1]}**`;
            case 2:
                return `*${sequence[index]}--${sequence[index + 1]}*`;
            case 3:
                return `${sequence[index]}----${sequence[index + 1]}`;
            case 4:
                return `*${sequence[index]}--${sequence[index + 1]}*`;
        }
    }
}


//helixDNA(4);
helixDNA(10);