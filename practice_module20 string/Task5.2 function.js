function toCapitalize(s){    
    const list = s.split(" ")
    const capitalList = []

    for(var word of list){
        capitalList.push(word[0].toUpperCase() + word.slice(1))
    }
    return capitalList.join(" ")
}


const s = "hi, my name is arun roy"
console.log(toCapitalize(s))