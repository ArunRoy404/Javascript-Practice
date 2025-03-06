const products = [
    {id: 1, model: 'iphone', price: 1000, brand: 'apple'},
    {id: 2, model: 'redmi', price: 700, brand: 'xiaomi'},
    {id: 3, model: 'galaxy', price: 1500, brand: 'samsung'},
    {id: 4, model: 'reno', price: 400, brand: 'oppo'},
    {id: 5, model: 'new', price: 500, brand: 'vivo'},
]

const newProducts = products.map(product => {
    if(product.price >= 700){
        return product
    }
})

// also returns undefined cause it returns for every element 
console.log(newProducts)

// returns true false but not the product 
const newProducts2 = products.map(product => product.price>=700)
console.log(newProducts2)

// so we will use map when we need to get new array after performing an action 
const newProducts3 = products.map(product => {
    product.status="sold"
    return product
})
console.log(newProducts3)

console.log(" ")
const newProducts4 = products.map(product => {
    if(product.brand === 'apple'){
        product.price = 0
    }
    return product
})
console.log(newProducts4)