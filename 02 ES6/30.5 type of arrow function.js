// no parameters or empty paranthesis
const hello = () =>{
    console.log("hello world!")
}
hello()

// single parameter 
const square = num => num**2
console.log(square(5))

// arrow function can be used in event 
// document.getElementById(id).addEventListener('click',
//     ()=>{
//         execution code
//     }
// )