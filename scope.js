// var name = 'Jill'

var secretsFunction = function () {
    var pinCode = [0, 0, 0, 0]
    // console.log('pinCode inside secretsFunction:', pinCode)
    // console.log(name)
    // lexical scope, the function can see the variable "name" outside of the function
}

secretsFunction()
// console.log('pinCode outside secretsFunction:', pinCode)
// gives a reference error "not defined"

var filterNamesByFirstLetter = function (names, letter) {
    let filteredNames = [];
    for (let name of names) {
        if (name[0] === letter) {
            filteredNames.push(name);
        }
        console.log(name)
    }
    return filteredNames
}

let students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
let filteredStudents = filterNamesByFirstLetter(students, 'A');
console.log('filteredStudents:', filteredStudents);


let isItFive = function (number) {
    let result = false
    if (number === 5) {
        result = true;
    }
    return result;
}
console.log(isItFive(5))


let calculateEnergy = function (mass) {
    const speedOfLight = 299792458;
    return mass * speedOfLight ** 2;
}

let energyOfMe = calculateEnergy(75);
console.log('energyOfMe (if I had a mass of 75kg)', energyOfMe);
  // -> energyOfMe (if I had a mass of 75kg) 6740663840526132000