const yo = async()=>{
    return "hello"
}

console.log(yo()) //returns promise

yo()
.then(console.log)