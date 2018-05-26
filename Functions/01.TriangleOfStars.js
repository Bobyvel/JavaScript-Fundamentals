function starTriangle(number) {

    for (let i = 1; i < number; i++) {
        console.log('*'.repeat(i));

    }
    for (let i = number; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}
// nested functions
function printTriangle(n) {
    function printStars(count) {
        console.log("*".repeat(count));
    }
    for (let i=1; i<=n; i++) printStars(i);
    for (let i=n-1; i>0; i--) printStars(i);
}


printTriangle(3);
