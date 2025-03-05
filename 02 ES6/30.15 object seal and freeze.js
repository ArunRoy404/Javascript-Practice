const person = {
    name: 'arun',
    friends: ['nusrat', 'tamanna', 'bushra'],
    age: 22
}

// add entry 
person.hobby = 'gaming'
console.log(person)

// seal object to prevent add entries in object
// but can changes values  
Object.seal(person)
person.lafalafi = "yo"
person.age = 18
console.log(person)


//freeze object to completely unable to change or add entries
Object.freeze(person)
person.lafalafi = "yo"
person.age = 20
console.log(person)