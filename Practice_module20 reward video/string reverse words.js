function reverseWord(s){
    const list = s.split(" ")
    return list.reverse().join(" ")
}

const s = reverseWord("Lightweight and durable backpack")
console.log(s)



// with "ada".function 
String.prototype.reV = function(){
    return this.split(" ").reverse().join(" ")
}

console.log("hello i am arun".reV())