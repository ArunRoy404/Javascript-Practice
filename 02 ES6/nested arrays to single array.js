// making a single array 
const array = [[1,2,3], [4,5,6],[7,8,9,0]]

// const newArray = []
// for(subArray of array){
//     newArray.push(...subArray)
// }
// console.log(newArray)

const newArray2 = array.reduce((acc, current)=> acc.concat(current))
console.log(newArray2)