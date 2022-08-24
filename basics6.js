// object is collection of properties

let person = {

    firstName: 'Tim',
    lastName: 'Joe',
    age: 24,
    fullName: function()
    {
        this.firstName+this.lastName // this. represents current object, similar to self in python
    }



}
console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName']) // also method to get property from object via array method
person.firstName = 'Thomas'
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person)

for(let key in person)
{
    console.log(person[key])
}