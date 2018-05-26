function radar(input) {
    let speed = Number(input[0]);
    let zone = input[1];

    let limit = getLimit(zone);

    function getLimit(zone) {
        switch (zone) {
            case "city":
                return 50;
            case "interstate":
                return 90;
            case "motorway":
                return 130;
            case "residential":
                return 20;
        }
    }
    let infraction = getInfraction(speed, limit);

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else if (overSpeed <= 20) {
            return "speeding";
        } else if (overSpeed <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }

    if (infraction) {
        console.log(infraction);
    }

}

radar([120, 'interstate']);


