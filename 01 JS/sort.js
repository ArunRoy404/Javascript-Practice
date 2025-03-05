
// capital asci values are lower
const person = ["akib", "sakib", "pakib", "manik", "Pakib"]

person.sort()
console.log(person)

// sort considers all the elements as string 
const numbers = [1,2,3,6,6,55]
numbers.sort()
console.log(numbers)

// sort numbers ascending order
const num = [1,2,3,6,5,2,66,5,522,1]
num.sort(function (a,b){return a-b})
console.log("asc: ",num)

// sort numbers descending order
num.sort(function (a,b){return b-a})
console.log("dsc: ",num)


// dont change the array 
const newList = [1,2,3,6,5,2,66,5,522,1]
const Changed = [...newList].sort(function (a,b){return a-b})
console.log("no changed",newList)
console.log(Changed)