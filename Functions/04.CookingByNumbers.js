function cooking(input) {
    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
    number = calculate(number, input[i]);
    console.log(number);
    }

    function calculate(number, operation) {

         switch (operation) {
            case 'chop': return number /= 2;
            case 'dice': return Math.sqrt(number);
            case 'spice': return number += 1;
            case 'bake': return number *= 3;
            case 'fillet': return number -= number*0.2;
        }
    }
}

cooking([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);