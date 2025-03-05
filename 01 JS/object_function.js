const person = {
    name : "john",
    id : 123,
    address : "dhaka",
    isSingle : true,
    friends : ['apu', 'raaz', 'salman'],
    car : {
        brand : "tesla",
        price : 1200000,
    },
    act : function(){
        console.log("SHout Loud")
    },
}

console.log(person)
console.log(person.friends)
person.act()