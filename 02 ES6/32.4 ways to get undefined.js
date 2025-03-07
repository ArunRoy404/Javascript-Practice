const sum = (num1, num2) =>{
    console.log(num1, num2)
    console.log(num1+num2)
}

// here the parameter received no value that exist/ so it is undefined 
// and undefined + undefined = NaN 
sum()

// in this console.log sum returns nothing. so that is undefined 
console.log(sum(10,20))