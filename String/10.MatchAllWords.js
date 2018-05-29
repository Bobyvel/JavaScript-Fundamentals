function matchWords(input) {
    let pattern = /\w+/g;

    let result = input.match(pattern);

    console.log(result.join('|'));
}

matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
