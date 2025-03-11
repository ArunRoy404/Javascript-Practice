const tellJoke = () =>{
    console.log("Why don't scientists trust atoms? Because they make up everything! lol")
}

// const jokeInterval = setInterval(tellJoke,2000)

setInterval(() => {
    tellJoke()
}, 2000);