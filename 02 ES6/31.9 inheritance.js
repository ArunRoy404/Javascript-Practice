// class Fruit{
//     taste = 'awesome'
//     nutrition = 'limitless'
//     effect(){
//         console.log('fruit is good for health')
//     }
// }

// class Banana extends Fruit{
//     constructor(name, color){
//         super() //here super has no arguments since i did n0t used constructor in Fruit class
//         // in inheritance we must use super before this 
//         this.name = name
//         this.color = color
//     }
//     eat(){
//         console.log(`I am eating ${this.name} fruit`)
//     }
// }

class Fruit{
    taste = 'awesome'
    nutrition = 'limitless'
    constructor(name, color){
        this.name = name
        this.color = color
    }
    effect(){
        console.log('fruit is good for health')
    }
}

class Banana extends Fruit{
    constructor(name, color, season){
        super(name, color) //here super has no arguments since i did n0t used constructor in Fruit class
        // in inheritance we must use super before this 
        this.season = season
    }
    eat(){
        console.log(`I am eating ${this.name} fruit`)
    }
}

const banana = new Banana('banana','yellow', 'all time')
// console.log(banana)
console.log(banana.name)
console.log(banana.season)
banana.effect()
banana.eat()
