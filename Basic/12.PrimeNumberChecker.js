function isPrime(num) {
    let prime = true;

     //if (num <= 1) { // variant 1
     //    console.log(false);
     //    return;
     //}
    for (let divisor = 2; divisor < Math.sqrt(num); divisor++) {

        if (num % divisor === 0) {
            prime = false;
            break;
        }
    }
    //console.log(prime);
     console.log(prime && (num > 1)); // two bools with 0, 1 // variant 2

}

isPrime(1);
isPrime(-5);
isPrime(7);
isPrime(81);