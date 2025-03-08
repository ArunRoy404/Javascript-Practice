const user = {
    id : 123,
    pass: 'asdf'
}

// cant spread like an array
// console.log(...user) 


// spreads the object inside another object 
const admin = {
    ...user,
    role: "admin"
}

console.log(admin)