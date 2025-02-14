const person = {
    name : 'Arun',
    hoddy : "playing games",
    profession : 'developer',
    salary : 30000,
    fav_food : ["biriyani", "khichuri", "fruit"],
    "address" : "dhaka"
}

console.log(person.salary)
console.log(person.fav_food)

// error 
// console.log(person.'address')
console.log(person['address'])

