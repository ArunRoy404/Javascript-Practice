const isNull = null
let value = 'not null'
console.log(value)

value = isNull ?? 'yes, it is null'
console.log(value)
