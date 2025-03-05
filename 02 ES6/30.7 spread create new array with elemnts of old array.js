const oldArray = [1,2,3,4,5]
console.log(oldArray)

const newArray = ["hello", "ok", oldArray]
console.log(newArray)

const newArray2 = ["hello", "ok", ...oldArray]
console.log(newArray2)