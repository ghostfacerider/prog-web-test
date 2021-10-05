/* var num = 5
while (num < 10) {
    console.log(num)
    num = num + 1
}
*/

// ask a user for their password
// number password loop

/* var prompt = require("prompt-sync")()
var password = ""
while (password === "") {
    password =  prompt("enter a password: ")
}
console.log("Yeah! You finall typed it in!")
*/



var prompt = require('prompt-sync')
//Ask the user to type in anumbers until they are done
// number loop
var num = 0
var end = ""
while (end != "Y"){
        end = prompt("enter 'Y' to enter a number.")
        if (end == "Y"){
            num = prompt("Enter a number: ")
            end = ""
        }
}