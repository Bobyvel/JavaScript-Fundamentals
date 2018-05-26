function filterByAge(minimumAge, nameFirst, ageFirst, nameSecond, ageSecond) {
let personFirst = {name: nameFirst, age: ageFirst};
let personSecond = {name: nameSecond, age: ageSecond};

if (personFirst.age >= minimumAge) {
    console.log(personFirst);
}
if (personSecond.age >= minimumAge){
    console.log(personSecond)
}

}



filterByAge(19,'Pesho',119,'Gosho',20);