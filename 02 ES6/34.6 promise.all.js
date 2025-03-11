const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
const fetchToDos = fetch('https://jsonplaceholder.typicode.com/todos')


// Promise.all([fetchUsers, fetchPosts, fetchToDos])
// .then(responses=>{
//     return responses[0].json()
// })
// .then(console.log)


Promise.all([fetchUsers, fetchPosts, fetchToDos])
.then(responses=>{
    return Promise.all(responses.map(r=>r.json()))
})
// .then(console.log)
.then(data => {
    const [users, posts, toDos] = data
    console.log("users: ", users)
})
.catch(error=> console.log(error.message))
