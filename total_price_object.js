const products = [
    {name : "shampoo", price : 200, quantity : 2},
    {name : "chiruni", price : 100, quantity : 3},
    {name : "shirt", price : 600, quantity : 5},
    {name : "pant", price : 1200, quantity : 2},
]

function totalPrice(products){
    let totalPrice = 0 ;
    for(const product of products){
        totalPrice += product.price * product.quantity;
    }
    return totalPrice;
}

console.log(totalPrice(products))