let a = 10
let b = a

const alter = () => {
    b = 120
}

console.log(a,b)
alter()

// here only b changed 
// cause b has the copied value of a not ref
console.log(a,b)