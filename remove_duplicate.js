function removeDuplicate(array){
    const unique = []
    for(const item of array){
        if(!unique.includes(item)){
            unique.push(item)
        }
    }
    return unique
}

array = [1,2,3,4,5,6,1,2,3,4,5,6]
console.log(removeDuplicate(array))