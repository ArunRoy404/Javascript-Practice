// array.reduce returns a single element/ result 

const array = [1,2,3,4,5]


// here acc is the first value and then undefined 
// and current is the rest of the values except acc first value 
const result = array.reduce((acc,current)=> acc+current)
console.log(result)

// or we can set acc value 
// then current weill iterate all the array elements
const result2 = array.reduce((acc, current) => acc+current, 5)
console.log(result2)