function calculateElectronicsBudget(laptop, tablet, mobile){
    let total_money = laptop+tablet+mobile
    return total_money
}

const laptop = 35000 
const tablet = 15000 
const mobile = 20000 

const total_money = calculateElectronicsBudget(laptop,tablet,mobile)
console.log(total_money) 