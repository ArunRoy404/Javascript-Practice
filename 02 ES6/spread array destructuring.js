const array = [1,2,3, 4,5, 6,7,8,9,0]

// using spread we can take 
// all the rest elements in another array 
const [a1, a2, ...a3] = array
console.log(a1, a2, a3)

// to skip an element just add no variable on that index 
const [b1,b2, , ...b3] = array
console.log(b1,b2,b3)