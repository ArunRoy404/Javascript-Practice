
String.prototype.capitalFirstWord = function(){
    const list = this.split(" ")
    const new_list = []
    for (const word of list){
        new_list.push(word[0].toUpperCase()+word.slice(1))
    }
    return new_list.join(" ")

}
console.log("hi, my name is arun roy".capitalFirstWord())