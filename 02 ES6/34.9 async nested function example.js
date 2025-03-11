const cookFood =()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Delicious Food")
        }, 1000);
    })
}

const orderFood = async () =>{

    //first food is cooked then execute next instruction
    const food = await cookFood()

    // console.log(food)
    console.log('food is ready')
    console.log(food)

    // use when no await 
    // setTimeout(() => {
    //     console.log(food)
    // }, 1000);
}

orderFood()