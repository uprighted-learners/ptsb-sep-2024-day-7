console.log("from the script.js!")

let color = "blue"
let fruit = " soda"

console.log("our color", color)
console.log("our fruit", fruit)

console.log(color + fruit)

let ourFruit = (color + fruit).toUpperCase()
console.log(" // script.js - the color of our fruit", ourFruit)

if (color) {
    console.log("we have a color: " + color)
} else {
    console.log("we don't have a color!")
}

let secondsPerMinute = 60
let minutesPerHour = 60
let hoursPerDay = 24
let daysPerYear = 365

console.log("OUR UNIVERSE seconds in a year", secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear)


secondsPerMinute = 50

console.log("INTO THE WARPHOLE seconds in a year", secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear)


minutesPerHour = 100
hoursPerDay = 25
daysPerYear = 500

console.log("THE DARKEST TIMELINE seconds in a year", secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear)
