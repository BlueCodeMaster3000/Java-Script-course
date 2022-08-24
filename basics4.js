// block of code
// var - global level/functional
// let - global level/block level {}
// const - cannt be overriden
var grett = "Evening"
greet = "Night"

if(1==1)
{
    var greet = "Afternoon"
}

function add(a,b)
{
    var greet = "Morning"
    return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(greet) // wont work with Morning since var is only alive inside function

// do not have name => Anynymous function -- Function expressions

let sumOfIntegers = function(c,d)
{
    return c+d
}

let sumOfNumbers = (c,d)=> c+d
console.log(sumOfNumbers(2,3))
