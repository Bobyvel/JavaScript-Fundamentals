function distance([x1, y1, z1, x2, y2, z2]) {

    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let c = Math.abs(z1 - z2);

    let result = Math.sqrt(a*a + b*b + c*c);
    console.log(result);

}

distance([1, 1, 0, 5, 4, 0]);