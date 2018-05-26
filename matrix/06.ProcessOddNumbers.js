function firstLastElements(arr) {
    let result = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2*x)
        .reverse();

    console.log(result.join(' '));

}

firstLastElements([10, 15, 20, 25]);
firstLastElements([3, 0, 10, 4, 7, 3]);