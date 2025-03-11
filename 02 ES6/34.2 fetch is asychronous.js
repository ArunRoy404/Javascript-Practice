console.log('first')

// executes at last after the execution of all synchronous execution 
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json())
.then(console.log)

console.log('second')