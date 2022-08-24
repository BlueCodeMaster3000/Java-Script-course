// Inheritance is the main pillar in object oriented programing
// one class can inherit/acquire the properties, methods of another class
// the class which inherits the properties of other is knows as subclass
// the class whose properties are inherited is known as superclass
const Person = require('./basics7')
class Pet extends Person 
{
    get location()
    {
        return "BlueCross"
    }


    constructor(firstName, lastName)
    {
        // call parent class constructor
        super(firstName, lastName)
    }
}

let pet = new Pet("Billy", "Small")
console.log(pet.fullName())
console.log(pet.location)