// when passing a function as an argument inside a function is called callback function 

const sum = (num1, num2, show) => {
    let result = num1 + num2
    show(result)
}

const showResult = result => {
    console.log(`result: ${result}`)
}

sum(1,2,showResult)
sum(4,5,showResult)


// also can be an anonymous function 
const multiply = (array, cb) =>{
    for(num of array){
        let m = cb(num)
        console.log(m)
    }
}

// here an anonymous function given as argument 
a = [1,2,3,4,5]
b = [9,8,7,6,5]
multiply(a, (x)=>{
    return x**2
})
console.log()
multiply(b, (x)=>{
    return x**2
})

console.log()

const ghotok = (patri, name) =>{
    patri(name)
}
const patri1 = name =>{
    console.log(`${name}, patri 1 founded for you`)
}

const patri2 = name =>{
    console.log(`${name}, patri 2 founded for you`)
}

ghotok(patri1, 'x')
ghotok(patri2, 'y')