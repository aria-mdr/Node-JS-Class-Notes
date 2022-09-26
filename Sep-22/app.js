console.log('Hello World');

let name
let age = 24
let favColor = 'Black'

name = "Aria"

let friendName = 'John'
let friendAge = 30
let friendFavColor = 'Red'

const friendDob = new Date('September 22, 1992');

const dob = new Date('September 15, 1998');

console.log(name + ' is ' + age + ' years old he is born on '+ dob + ' and his favourite color is ' + favColor)

age++; // age = age + 1,  age += 1
console.log(name + ' is ' + age + ' years old he is born on '+ dob + ' and his favourite color is ' + favColor)

let sum = (age + friendAge) / 2

console.log(`sum of ${name} and ${friendName} is ${sum}`)

if( age > '28') {
    console.log(`JS can convert string to num`)
}

if( age > 'twenty') {
    console.log('js undrestands words and turns them into num')
} else {
    console.log('js is not able undrestands words and turns them into num')
}

let grade1 = 70
let grade2 = 78
let grade3 = 100
let grade4 = 40
let grade5 = 30

// array
let grades = [70, 78, 100, 40, 30]

grades[0]
grades[1]

grades.push(0)
grades.pop()

grades.length // 5

grades.includes(2)