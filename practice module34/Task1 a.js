// a function that shows a message after 5 sec

const showMsg = (msg) =>{
    setTimeout(() => {
        console.log(msg)
    }, 5000);
}

showMsg("hello")