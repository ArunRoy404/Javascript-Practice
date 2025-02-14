let s = "xXalk"
let y 
if(s.includes('x')){
    y = s.replace('x','y')
}
let z
if(y.includes('X')){
    z = y.replace("X","Y")
}

console.log(z)