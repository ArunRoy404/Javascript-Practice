const person = {
    name: 'arun',
    friends: ['nusrat', 'tamanna', 'bushra'],
    age: 22
}

// const entries = Object.entries(person)
// for(const entry of entries){
//     console.log(entry)
// }

// destructuring entries array 
const entries = Object.entries(person)
for(const [key,value] of entries){
    console.log(`key: ${key}, value: ${value}`);
}