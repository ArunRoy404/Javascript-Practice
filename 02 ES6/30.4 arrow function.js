// normal function 
function sum(num1, num2){
    return num1+num2
}
console.log(sum(10,20))

// arrow function 
const sum2 = (num1, num2) =>{
    return num1+num2
}

console.log(sum2(20,30))

// single line arrow function auto returns
const sum3 = (num1, num2) => num1+num2
console.log(sum3(50,40))