
// event loop executes the synchronous execution first 
// and moves aysnchrounous execution in callback queue
const person1 = () =>{
    console.log("tea ready")
}
const person2 = () =>{
    console.log("jhaal muri ready")
}
const person3 = () =>{
    setTimeout(()=>{
        console.log('fuchka ready')
    },0) //even though tim is 0 , the task executes after the execution of all synchronous instruction
}
const person4 = () =>{
    setTimeout(() => {
        console.log('fuchka2 ready')
    }, 0); //even though tim is 0 , the task executes lastly
}
const person5 = () =>{
    console.log("tea ready")
}

person1()
person2()
person3()
person4()
person5()