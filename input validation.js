function getPrice(input){
    if(typeof input !== 'object' || Array.isArray(input)){
        return "not an object"
    }
    return input.price
}

const b = [1,2,3,6,5,4] 
const a = { name : 'samsung', price : 1500}
console.log(getPrice(a))
console.log(getPrice(b))


function getSecond(array){
    if(!Array.isArray(array)){
        return "not an array"
    }
    return array[1]
}

console.log(getSecond(b))
console.log(getSecond(a))