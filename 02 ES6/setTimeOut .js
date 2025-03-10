// asynchronous function 
const show = () =>{
    console.log('this message is before')
    setTimeout(() => {
        console.log('inside set time out function')
    }, 2000);
    console.log('this message is after')
}

show()