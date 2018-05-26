function madeCristal(input) {

    let cut = x => x / 4;
    let lap = x => x - x * 0.2;
    let grind = x => x - 20;
    let etch = x => x - 2;
    let xray = x => x + 1;
    let wash = x => parseInt(x);

    function getOperation(type) {

        switch (type) {
            case cut: return 'Cut';
            case lap: return 'Lap';
            case grind: return 'Grind';
            case etch: return 'Etch';
            case xray: return 'X-ray';

        }
    }

    let neededThikness = input[0];

    for (let i = 1; i < input.length; i++) {
        let crystal = input[i];

        console.log(`Processing chunk ${crystal} microns`);

        let cuts = 0, laps = 0, grinds = 0, etchs = 0, xrays = 0;
        let previousOperation = '';
        let currentOperation = '';
        while (crystal !== neededThikness) {

            if (cut(crystal) >= neededThikness - 1) {
                crystal = cut(crystal);
                cuts++;
                currentOperation = getOperation(cut);
            } else if (lap(crystal) >= neededThikness - 1) {
                crystal = lap(crystal);
                laps++;
                currentOperation = getOperation(lap);
            } else if (grind(crystal) >= neededThikness - 1) {
                crystal = grind(crystal);
                grinds++;
                currentOperation = getOperation(grind);
            } else if (etch(crystal) >= neededThikness - 1) {
                crystal = etch(crystal);
                etchs++;
                currentOperation = 'Etch';
            } else if (crystal === neededThikness - 1) {
                crystal = xray(crystal);
                xrays++;
                currentOperation = getOperation(xray);
            }else {
                crystal = wash(crystal);
            }
            if(currentOperation !== previousOperation && previousOperation !== '') {
                crystal = wash(crystal);
            }
            previousOperation = currentOperation;

        }
        if(cuts > 0){print(cuts, getOperation(cut))}
        if(laps > 0){print(laps, getOperation(lap))}
        if(grinds > 0){print(grinds, getOperation(grind))}
        if(etchs > 0){print(etchs, getOperation(etch))}
        if(xrays > 0){print(xrays, getOperation(xray))}


        console.log(`Finished crystal ${crystal} microns`);

        function print(count, operation) {

            console.log(`${operation} x${count}`);
            if (operation !== 'X-ray') {
                console.log("Transporting and washing");
            }
        }
    }
}

//madeCristal([1375, 50000]);
madeCristal([1000, 4000.5, 8100]);