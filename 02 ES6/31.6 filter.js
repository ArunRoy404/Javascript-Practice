const products = [
    {id: 1, model: 'iphone', price: 1000, brand: 'apple'},
    {id: 2, model: 'redmi', price: 700, brand: 'xiaomi'},
    {id: 3, model: 'galaxy', price: 1500, brand: 'samsung'},
    {id: 4, model: 'reno', price: 400, brand: 'oppo'},
    {id: 5, model: 'new', price: 500, brand: 'vivo'},
]


// returns elements based on condition 
const newProducts = products.filter(product => product.price>700 && product.brand=='apple')
console.log(newProducts)