
// converts to string 
const a = 10 + '10'
console.log(a, typeof a)

const b = '10' + 10
console.log(b,typeof b)

const s = 's' + null // null becomes string
console.log(s)





// converts to number

const n = 5 + null // null becomes 0
console.log(n)
const n2 = null - 5
console.log(n2)

const x = '10' - 5
const y = 10 - '5'
console.log(x, typeof x)
console.log(y, typeof y)

const f = 10 * '3'
console.log(f)
const g = '4' * 5
console.log(g)