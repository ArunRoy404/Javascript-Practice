// no limit to parameter 
// can take multiple parameter 
//taking parameter as an array

const sum = (...input) => {
    let result = 0
    for(let num of input){
        result+=num
    }
    return result
}
const result = sum(1,2,3,4,5,6,7,8)
console.log(result)