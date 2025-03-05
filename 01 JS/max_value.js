function getMax(numbers){
    let max = numbers[0]
    for(const num of numbers){
        if(max<num){
            max = num
        }
    }
    return max
}

const numbers = [1,3,6,9,8,5,6,5,4]

console.log(getMax(numbers))
console.log(Math.max(1,2,3))