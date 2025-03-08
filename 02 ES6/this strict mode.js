// usually this keyword points at window
// function yo(){
//     console.log(this)
// }
// yo()

// but in strict mode this refers to the function block
'use strict'
function yo2(){
    console.log(this) //undefined
}
yo2()
