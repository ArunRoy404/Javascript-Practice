
// x is a global variable of scope globally
const x = 10

const sum = (num1, num2) => {
    // scope of y is inside this function block 
    const y = num1+num2
    if(y>5){
        console.log(y)
    }
    console.log(y)
}
sum(5,6)

// y can not be accessed from outside its scope 
console.log(y)