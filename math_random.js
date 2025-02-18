
// returns random int 0 - maxRange
function randomInt(maxRange){
    const value = Math.random()*maxRange
    return Math.round(value)
}

console.log(randomInt(10))

function random(min, max){
    return Math.round(Math.random() * (max-min) + min)
}


console.log(random(20,30))