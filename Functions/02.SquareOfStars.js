function printSquareOfStars(n) {

    for (let i = 1; i <= n; i++) {
        console.log('*' + ' *'.repeat(n-1));
    }
}

// nested function
function squareOfStars(n) {
    function printStars(count = n) {
        console.log("*" + " *".repeat(count-1));
    }
    for (let i=1; i<=n; i++) printStars();
}

squareOfStars(3);
