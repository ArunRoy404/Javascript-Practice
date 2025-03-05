const array = [2,3,5,4,3,5,3,3]

// dosen't work in array 
console.log(Math.max(array))

// works in Elements  
console.log(Math.max(...array))
console.log(Math.min(...array))