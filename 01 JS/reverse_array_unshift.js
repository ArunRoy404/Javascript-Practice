const list = [1,2,3,4,5,6,7,8,9]

const reversed = []

for(const number of list){
    reversed.unshift(number)
}

console.log(reversed)