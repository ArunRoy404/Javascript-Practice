function mul_div(a){
    if(a%2==1){
        return a*2
    }
    return a/2
}

const odd = mul_div(5)
const even = mul_div(6)

console.log(odd)
console.log(even)