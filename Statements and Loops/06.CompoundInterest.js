function compoundInterest([p, iRate, n, timespan]) {

    let compoundInterest = p * Math.pow(1 + iRate/(100*( 12/n)), 12/n * timespan);

    console.log(compoundInterest.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);