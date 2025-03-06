const array = [1,2,3,4,5,6,7]

const newArray = array.forEach(element => {
    return element + 1
})
// do n0t returns
console.log(newArray)


// just does an sspecific execution 
const products = [
    {id: 1, model: 'iphone', price: 1000, brand: 'apple'},
    {id: 2, model: 'redmi', price: 700, brand: 'xiaomi'},
    {id: 3, model: 'galaxy', price: 1500, brand: 'samsung'},
    {id: 4, model: 'reno', price: 400, brand: 'oppo'},
    {id: 5, model: 'new', price: 500, brand: 'vivo'},
]
// products.forEach(product => console.log(product))
products.forEach(product => {
    if(product.price > 700){
        console.log(product)
    }
})

// it also has index 
products.forEach((product, index) => {
    console.log(index, product)
})