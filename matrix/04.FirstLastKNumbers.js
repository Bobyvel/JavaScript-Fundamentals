function partOfArray(array) {

    let numberToTake = array.shift();

    let firstK = array.slice(0, numberToTake);
    let lastK = array.slice(array.length - numberToTake);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

partOfArray([2,7, 8, 9]);
partOfArray([3,6, 7, 8, 9]);