// function sayHello(name) {
//     return `Hello World! ${name}`
// }

// var phrase = sayHello("Calum")

// // console.log("msg:", phrase)

// var add = function (firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// console.log('1 + 3 =', add(1, 3))




// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.
function numbersTotal(numbersArray) {
    var total = 0;
    for (var number of numbersArray){
        total += number;
    }
    return total;
}

var sum = numbersTotal([2,2,2,2])
console.log(sum)

// Define an anonymous function expression that takes two arguments:

// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.





// this is an example of an arrow function
var multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber
}

console.log(multiply(4, 5))