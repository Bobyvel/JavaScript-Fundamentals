function sortArray(arr) {

    function sortByLength(a, b) {
        return a.length - b.length || sortAlphabetical(a, b);
    }

    function sortAlphabetical(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }

   arr.sort((a, b) =>  sortByLength(a, b));

    console.log(arr.join('\n'));

}

//sortArray(['alpha','beta','gamma']);
//sortArray(['Isacc', 'Theodor','Jack','Harrison','George']);
sortArray(['test','deny','omen','Default', 'Deny']);
