function getMin(numbers){
    let max = numbers[0]
    for(const num of numbers){
        if(max>num){
            max = num
        }
    }
    return max
}

const numbers = [9,2,3,1,5,4,5,6,5,4]

console.log(getMin(numbers))
console.log(Math.min(1,2,3))