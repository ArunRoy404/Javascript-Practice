// when the name of the function start with capital letter 
// it is called constructor function 

function Hello(name){
    this.name = name
}

const h = new Hello('x')
console.log(h.name)