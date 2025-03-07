

const sum = (num1, num2) => {
    // like this 
    // var z; // but undefined 

    let x = num1+num2
    if(x>5){
        let y = x
        var z = -1
    }
    console.log(x)

    // we cant access a variable y outside its scope / block 
    // console.log(y)

    // but if we use var to declare a variable
    // it can be accessed outside the declared block / its scope
    console.log(z)
    // what it does is declare the variable at first of the block it want to access 
    
}
sum(3,4)


// but we cant access it outside a function 
// console.log(z)


// declared at first line but undefined
// assigned value later in if block 
console.log(aa) 
if(5<6){
    var aa = 10
}
console.log(aa)
