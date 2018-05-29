function arrayFilter(arr) {

    let biggestNum = Number.NEGATIVE_INFINITY;

    function sequense(x) {

        if (biggestNum <= x){
            biggestNum = x;
            return true;
        }else   {
            return false;
        }
    }

    //let result = arr.filter((x, i) => x >= Math.max(...arr.slice(0, i + 1)));
    let result = arr.filter(x => sequense(x));
    console.log(result.join('\n'));
}

arrayFilter([1, 3, 8, 4, 10, 12, 3, 2, 24]);