// an async function that fetch data from an api and logs a message 

const fetchJoke = async() =>{
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    const joke = await response.json()
    return joke.joke
}

fetchJoke()
.then(console.log)