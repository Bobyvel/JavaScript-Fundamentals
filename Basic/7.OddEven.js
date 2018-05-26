function typeNimber(number) {

    if (!Number.isInteger(number)){ //check the type here
        console.log("invalid");
        return;
    }

    if (number % 2 == 0){
        console.log("even")
    } else {
        console.log("odd")
    }

}

typeNimber(5);
typeNimber(4);
typeNimber(1.2);
typeNimber("2");
typeNimber(false);