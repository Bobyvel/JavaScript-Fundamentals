function assignProperties(arr) {

    let object = {};
    for (let i = 0; i < arr.length ; i += 2) {
        
        let value = arr[i + 1];
        let property = arr[i];

        object[property] = value;
    }


    console.log(object);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);