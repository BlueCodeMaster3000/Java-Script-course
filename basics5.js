const Person = require('./basics7')

let day = 'tuesday '
console.log(day.length)  // 8
let subDay = day.slice(0,4)
console.log(subDay)  // tues
console.log(day[1]) // u
// tue day
let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length) // day / .trim() removes whitespaces


let date = '5'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date) // conversion strings to ints to comapre them
console.log(diff)
diff.toString() // conversion of int to str

let newQuote = day+ "is Funday" // concatinate
console.log(newQuote)
let val = newQuote.indexOf("day",5) // looking for second day in quote
console.log(val)
// tuesday is funday - how many times day is in this string?
let count = 0
let val1 = newQuote.indexOf("day")
while(val1!==-1)
{
    count++
    val1 = newQuote.indexOf("day",val1+1)
}
console.log(count)

let person = new Person("Michał", "Edwards") // making object from imported class
console.log(person.fullName())