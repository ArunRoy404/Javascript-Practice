const array = [1,2,3, 4,5, 6,7,8,9,0]

// to skip an element just add no variable on that index 
const [b1,b2, , ...b3] = array
console.log(b1,b2,b3)