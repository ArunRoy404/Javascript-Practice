// when a function takes a function as paramter,
// then the function has higher order then the callback function

function greet(name,fn){
    console.log('In first function')
    fn(name)
}

function sayHello(name){
    console.log("hello, "+name)
}

greet("x", sayHello)