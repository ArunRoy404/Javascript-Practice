function odd_avg(array){
    const odd_array = []
    let odd_sum = 0
    for (const num of array){
        if(num%2===1){
            odd_array.push(num)
            odd_sum += num
        }
    }
    return odd_sum/odd_array.length
}

const array = [1,2,3,4,5,6,7]
console.log(odd_avg(array))