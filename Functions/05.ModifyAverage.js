function modyfyAveg(number) {
    let arr = number.toString().split('').map(Number);

    while (true){
    let arrAvg = arr.reduce((a, b) => a + b) / arr.length;
    
    if (arrAvg > 5){
        break;
    }else  {
        arr.push(9);
    }

        //console.log(arrAvg);
}

    console.log(arr.join(''));

}



modyfyAveg(101);