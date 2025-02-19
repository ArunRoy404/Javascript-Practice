function minNumber(numbers){
    let min = numbers[0]
    for(const num of numbers){
        if(min > num){
            min = num
        }
    }
    return min
}
const heights2 = [167, 190, 120, 165, 137];
console.log(minNumber(heights2))