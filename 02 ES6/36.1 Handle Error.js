// linked to 36 test.html 

console.error("Hello, This is an error!!!")
console.warn("This is a warning!!!")

try{
    console.log("hello world")
    // console.log(ok)
    throw "hehe"
    console.log("after ok")
}catch(error){
    console.log(error.name) //does not work in throw error
    console.log(error.message) //does not work in throw error
    console.log(error)
}finally{
    console.log("no matter what, this code will execute")
}