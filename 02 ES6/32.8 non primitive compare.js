const a = []
const b = []


// false cause both do not have same reference 
console.log(a==b)
console.log(a===b)



const c = a
// same reference so true 
console.log(a==c)
console.log(a===c)