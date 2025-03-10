const handlePostLoad = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r=>r.json())
    .then(data=>loadPost(data))
}

const loadPost = (posts) =>{
    const postContainer = document.getElementById('post-container')
    

    for(const post of posts){
        const p = document.createElement('div')
        p.classList.add('post')
        p.innerHTML = `
            <h2>${post.title}</h2>    
            <p>${post.body}</p> 
            <button>Read More</button>   
        `
        postContainer.appendChild(p)
    }
}
