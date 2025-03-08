const person = {
    name: 'x',
    age: '22',
    city: 'dhaka',
    greet: function(){
        console.log(`hello, ${this.name}`)
    }
}

person.greet()
person.name = 'y'
person.greet()