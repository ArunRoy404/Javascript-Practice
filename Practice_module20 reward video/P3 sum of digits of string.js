const s = "$416546s543135254f356^$&1"
let sum = 0
for(letter of s){
    if(!isNaN(letter) && letter!==" "){
        sum += parseInt(letter)
    }
}

console.log(sum)