// noramal price = 100
// if quantity <=100 --> per price = 100
// if quantity 101-200 --> per price = 90 
// if quantiy >200 ---> per price = 80

function discountedPrice(quantity){
    if (quantity<=100){
        return quantity*100
    }
    if(quantity<=200){
        return quantity*90
    }
    return quantity*70
}

let quantity = 201
console.log(discountedPrice(quantity))