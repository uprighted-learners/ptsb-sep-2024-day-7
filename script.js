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
let daysPerYear = 365;

console.log("OUR UNIVERSE seconds in a year", (secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear))

secondsPerMinute = 50

console.log("INTO THE WARPHOLE seconds in a year", secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear)

minutesPerHour = 100
hoursPerDay = 25
daysPerYear = 500
let DARKEST = (secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear)
console.log("THE DARKEST TIMELINE seconds in a year", secondsPerMinute * minutesPerHour * hoursPerDay * daysPerYear)

let age = 34
console.log('my name is Joe and i am ' + age + 'years old')

let city = "New York"
console.log(city + " is the worst city in US!!!!!")

let pi = 3.14
console.log("the value of pi is: " + pi)

let isSunny = false
if (isSunny) {
    console.log("it is not sunny!")
}

let score = 0
let gamePoints = 2
console.log("current score is: " + score)
score = score + gamePoints
console.log("current score is: " + score)
score += gamePoints
console.log("current score is: " + score)
score = score * gamePoints
console.log("current score is: " + score)
score *= gamePoints
console.log("current score is: " + score)

let price = 1.00
let discount = 0.10
let discountedPrice = price * discount;
let customerCash = 1

console.log("Your total is: " + (price - price * discount))
console.log("price: " + price)
console.log("Your discont was " + discount * 100 + "%")

if (customerCash < discountedPrice) {
    console.log("You don't have enough money!")
} else {
    console.log("You have enough money!")
}