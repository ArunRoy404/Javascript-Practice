function count(array, target){
    let count=0;
    for(const number of array){
        if(number == target){
            count++;
        }
    }
    return count;
}

const numbers = [5,6,11,12,98, 5];
console.log(count(numbers, 5))
console.log(count(numbers, 25))
