var marks = Array(6)
var marks = new Array(20, 40, 35, 12, 37, 100)

var marks = [20, 40, 35, 12, 37, 100]
subMarks = marks.slice(2,5) // sub array made from main array
console.log(subMarks)

console.log(marks[2]) // = 35
marks[3] = 14 // changing 12 to 14 
console.log(marks[3]) // = 14
console.log(marks)
console.log(marks.length) // lenght is 6
marks.push(65) // appends value 65 to array
console.log(marks.length) // lenght is 7
marks.pop() // removes last value from array
marks.unshift(12) // appends value 12 to begging of the array
console.log(marks.indexOf(100))
console.log(marks.includes(120)) // searches for 120 value in array


var sum = 0
for(let i=0;i<marks.length;i++)
{
    // console.log(marks[i]) prints all elements in the arrat
    sum - sum + marks[i] // sums elements in array
}
console.log(sum)

// reducie filter map
let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

var scores = [12,13,14,16]
// create new arraty with even number of scores array [12,14,16]
var evenScores = []
for(let i=0;i<scores.length;i++)
{
    if(scores[i] %2 == 0)
    {
        evenScores.push(scores[i])
    }
    
}
console.log(evenScores)

let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

// map
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)

// summing up array
let summedArray = mappedArray.reduce((sum, val)=>sum+val,0)
console.log(summedArray)

// chaining 
var scores1 = [12,13,14,16]
let sum1 = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum, val)=>sum+val,0)
console.log(sum1)


// sort function works only on strings
let fruits = ["Banana", "Mango", "Apple", "Orange"]
console.log(fruits.reverse())
fruits.sort()
console.log(fruits)

var scores2 = [12, 016, 19, 003, 14]
console.log(scores2.sort())
console.log(scores2.sort((a,b)=> a-b))
