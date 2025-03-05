const person = {
    name: 'arun',
    friends: ['nusrat', 'tamanna', 'bushra'],
    age: 22
}

for(let keys in person){
    let key = keys
    let value = person[keys]
    console.log(`key: ${key}, value: ${value}`)
}