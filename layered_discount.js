// first 100 ---> per price 100
// 101 to 200 ---> per price 90
// above 200 ---> per price 70

function discountedPrice(quantity){
    let price;
    if(quantity<=100){
        price = quantity*100
        return price
    }
    if(quantity<=200){
        price = (100*100) + (quantity-100)*90
        return price
    }
    price = (100*100) + (100*90) + (quantity-200)*70
    return price
}


let quantity = 203
console.log(discountedPrice(quantity))