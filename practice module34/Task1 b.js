const delayedGreeting = (name, delay) =>{
    setTimeout(() => {
        console.log(name)
    }, delay);
}

delayedGreeting('x',1000)