function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || (typeof serialNumber !== "number")){
        return "Invalid Input"
    }

    let totalTime = 0
    for(const time of waitingTimes){
        totalTime += time
    }
    let avgTime = Math.round(totalTime/waitingTimes.length)
    let remaining = (serialNumber-1-waitingTimes.length)*avgTime
    return remaining
}

console.log(waitingTime([7, 8, 3, 4, 5], "9"))
