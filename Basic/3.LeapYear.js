function leapYear(year) {

    let isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    console.log(isLeap ? "yes" : "no");
    
}

leapYear(2000);
leapYear(1900);