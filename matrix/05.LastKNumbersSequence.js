function sumLastKNumbersSequence(lenth, count) {
    let sequence = [1];

    for (let i = 1; i < lenth ; i++) {
        let startIndex = Math.max(0, i-count);
        let currentElement = sequence.slice(startIndex, startIndex + count).reduce((a, b) => a+b);
        sequence.push(currentElement);
    }

    console.log(sequence.join(' '));

}

sumLastKNumbersSequence(6, 3);
