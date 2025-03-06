class Vehicle{
    what = 'vehicle'

    constructor(name, type){
        this.name = name
        this.type = type
    }

    start(){
        console.log('the vehicle stated moving')
    }
}


const bike = new Vehicle('kawasaki', 'motor cycle')
console.log(bike)
console.log(bike.what)
console.log(bike.name)
console.log(bike.type)
bike.start()

class Fruit{
    taste = 'awesome'
    nutrition = 'limitless'
    constructor(name, color){
        this.name = name
        this.color = color
    }

    eat(){
        console.log(`I am eating ${this.name} fruit`)
    }
}

const banana = new Fruit('banana', 'Yellow')
const grape = new Fruit('grape', 'green')

console.log(banana)
banana.eat()