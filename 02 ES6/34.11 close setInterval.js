let counter = 0

const intervalID = setInterval(() => {
    counter++
    console.log('hello: ',counter)
    if(counter == 5){
        clearInterval(intervalID)
    }
}, 1000);

intervalID