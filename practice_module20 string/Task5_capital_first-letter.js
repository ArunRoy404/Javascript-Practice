const s = "hi, my name is arun roy"

var list = s.split(" ")
var new_list = []

for(const word of list){
    console.log(word)
    new_list.push(word[0].toUpperCase()+word.slice(1))

}
var new_s = new_list.join(" ")
console.log(new_s)