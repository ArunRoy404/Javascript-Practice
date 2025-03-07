
// primitive data types are the data types that store values instead of ref 
let s = 'string'
let num =10
let bool = true
// etc 
// primitive copies original value 
let x = num
console.log(x===num)



// non primitive data types are data types that stores ref of dynamic data 
let array = [1,2,3,"string",true]
let obj = {
    name: 'x',
    age: 1
}
const date = new Date()
console.log(date.toLocaleString())
// etc 
// non primitive dosent copy value just share the ref of same memory location 
let obj2 = obj
console.log(obj2)
obj.name = 'y'
console.log(obj2)