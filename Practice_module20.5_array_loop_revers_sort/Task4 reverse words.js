const statement = 'I am a hard working person'
const list = statement.split(" ")
const reversed = list.reverse().join(" ")
console.log(reversed)


// using loop
const statement2 = 'I am a hard working person'
const list2 = statement2.split(" ")
const reverseList = []
for(word of list2){
    reverseList.unshift(word)
}
const reversed2 = reverseList.join(" ")
console.log(reversed2)