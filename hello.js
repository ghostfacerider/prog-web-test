//user input

// use an external library to get sychronous input from the user
var prompt = require("prompt-sync")()

//prompt user for input
var name = prompt("enter your name: ")

// user the inputted value
console.log(`hi, ${name}!`)
