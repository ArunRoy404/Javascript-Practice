fetch('https://jsonplaceholder.typicode.com/users')
.then(r=>r.jon()) // error is here
.then(data=>console.log(data))
.catch(error=>console.log("the error is: "+error))

console.log('error caught successfully')