function count_zero(s){
    let count = 0
    for(const char of s){
        if(char=='0'){
            count++
        }
    }
    return count
}


s="0110101001111010"
console.log(count_zero(s))