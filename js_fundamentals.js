var name = 'Dave'
var age = 30
var hungry = true 
var something = null
var firstName = 'Dave'
var lastName = 'John'
// use camel case like above name variables rather than underscore

// console.log(name.toUpperCase())

var sum = 1 + 2 
var subtract = 1 - 2 
var multiply = 2 * 2 
var divide = 4 / 2 
var exponentiation = 2 ** 3
var remainder = 3 % 2

// console.log(subtract)

//top one displays it as a number, second one converts it to a string. will display as different colour in terminal
// console.log(5)
// console.log(String(5))

// console.log("My name is " + firstName + lastName)
// console.log(`Hello ${firstName} ${lastName}`)

//this one prints Route66
// console.log("Route" + 6 + 6)
// //this one prints 12 Route
// console.log(6 + 6 + " Route")


var number = -10 

if (number > 0) {
    var message = `${number} is greater than 0`
} else if (number == 0) {
    var message = `${number} is equal to 0`
} else {
    var message = `${number} is less than 0`
}

// === use this instead of == always as it compares the data type as well 

// console.log(message)

// using "" here is useful, perhaps in an empty box
if ("") {
	var result = 'The expression evaluates to true.';
} else {
	var result = 'The expression evaluates to false.';
}

// console.log(result)

// if (2 !== 2) {
//     console.log(true)
// } else {
//     console.log(false)
// }


//this one uses an "and" statement &&
if ((1 + 1 === 2) && (1 + 1 === 4)){
    console.log(true)
} else {
    console.log(false)
}

//this one uses an "or" statement ||
if ((1 + 1 === 2) || (1 + 1 === 4)){
    console.log(true)
} else {
    console.log(false)
}