fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json()) //converts the response into json as promise
.then(data=> console.log(data)) // the data