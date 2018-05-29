function censor(text, words) {

    for (let current of words) {

        while (text.indexOf(current) > -1) {

            text = text.replace(current, '-'.repeat(current.length));
        }
    }
    console.log(text);
}
censor('I like C#, HTML, JS and PHP',
    ['C#', 'HTML', 'PHP']);
