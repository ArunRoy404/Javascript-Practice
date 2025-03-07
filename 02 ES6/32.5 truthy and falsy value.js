// anything that dose not contains empty , false and 0 are true, 
console.log(false == 0)
console.log(false == '')

if(''==false){
    console.log(1)
}

// comparing empty [] with false is true 
if([]==false){
    console.log(2)
}
// but objects are different 
if({}==false){
    console.log('not false')
}


// but alone [] is true/ it contains the ref 
if([]){
    console.log(3)
}

// null not true nor false.but works as false 
if(null){
    console.log(4)
}
// false 
if(NaN){
    console.log(5)
}
// false 
if(undefined){
    console.log(6)
}


