let a = [1,2,3,4,5]
let b = a

const alter = () => {
    b.push(56) 
}

console.log(a,b)
alter()

// here both a and b changed 
// cause b ref of the array of a not copied value
console.log(a,b)