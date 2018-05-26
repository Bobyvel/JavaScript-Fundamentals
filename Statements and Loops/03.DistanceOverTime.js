function getDistance([speedV1, speedV2, t]) {

    let time = t/3600;

    let distanceV1= speedV1 * time;
    let distanceV2 = speedV2 * time;

    let resultInMeters = Math.abs(distanceV1-distanceV2) * 1000;
    console.log(resultInMeters);

}

getDistance([0, 60, 3600]);
getDistance([11, 10, 120]);