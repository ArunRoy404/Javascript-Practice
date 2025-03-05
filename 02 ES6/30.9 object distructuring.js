const person = {
    name: "Boltu",
    friends: ['nut','range'],
    hobby: 'gaming',
    age: 15
}
// console.log(person)
// const name = person.name
// const friends = person.friends
// const hobby = person.hobby
// const age = person.age
// instead we can use destructuring 

// in destructuring have to use same keys of Objects 
const { name, friends, hobby, age } = person
console.log(name, friends, hobby, age)