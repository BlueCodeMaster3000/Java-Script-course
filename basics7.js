module.exports = class Person
{
    age = 25
    get location()
    {
        return "canada"
    }
    // constructor is method which executes by dfault when you create object of the class
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
    // methods
    fullName()
    {
        return this.firstName +" "+ this.lastName
    }

}

// let dude = new Person("Kacper", "Biegajło")
// let dude1 = new Person("Tom", "Jones")
// console.log(dude.age)
// console.log(dude)
// console.log(dude.fullName())
// console.log(dude1.fullName())