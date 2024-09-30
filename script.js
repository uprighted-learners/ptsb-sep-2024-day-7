console.log("from the script.js!")

let color = "blue"
const fruit = "berry"

console.log(color)
console.log(fruit)

console.log(color + fruit)

let ourFruit = (color + fruit).toUpperCase()
console.log(ourFruit)

if (color) {
    console.log("we have a color: " + color)
} else {
    console.log("we don't have a color!")
}