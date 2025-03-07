// in a function can get all the arguments passed to it 
// arguments aldo have index 
function sum(num1, num2){
    console.log(arguments)
    console.log(arguments[0])
    console.log(...arguments)
}
sum(1,2)



// for arrow function it returns a abject
// const sum2 = (num1, num2) => {
//     console.log(typeof arguments)
// }
// sum2(1,2,3,4,5)