// JavaScript Object Notion 

const person = {
    name: 'x',
    age: 20,
    friends: ['y', 'z'],
    isMarried: false
}

// converts to JSON string 
const newPerson = JSON.stringify(person)

console.log(newPerson)
console.log(typeof newPerson)


// convert JSON to object 
const newPerson2 = JSON.parse(newPerson)
console.log(newPerson2)