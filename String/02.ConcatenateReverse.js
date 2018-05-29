function concatenateAndReverse(arr) {

    let allStrings = arr.join('');

    let chars = Array.from(allStrings);

    let revChars = chars.reverse();

    console.log(revChars.join(''));

}

concatenateAndReverse(['I', 'am', 'student']);
