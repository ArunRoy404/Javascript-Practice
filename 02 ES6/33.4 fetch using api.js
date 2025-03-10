const handleUserLoad=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(data => showData(data))
}

const showData =(users) =>{
    const userList = document.getElementById('user-list')
    for(const user of users ){
        const li = document.createElement('li')
        li.innerText = user.name
        userList.appendChild(li)
    }
}