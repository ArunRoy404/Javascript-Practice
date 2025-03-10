//the code below is a asynchronous execution
console.log('this instruction is before fetch')
const response = fetch('https://jsonplaceholder.typicode.com/users')
console.log(response)
console.log('this instruction is after fetch')

console.log()
console.log()

// the below code is asynchronous execution
console.log('this instruction is before fetch')
fetch('https://jsonplaceholder.typicode.com/users')
.then(r => r.json())
.then(data=> console.log(data))
console.log('this instruction is after fetch')