fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data=> showData(data))

const showData = users =>{
    console.log(users[0])
    
    for(const user of users){
        console.log(user.name)
    }
}