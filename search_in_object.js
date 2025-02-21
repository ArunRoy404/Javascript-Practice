const products = [
    { id: 1, name : "xiaomi phone", price: 19200},
    { id: 2, name : "msi Laptop", price: 52200},
    { id: 3, name : "Samsung Phone", price: 25200},
    { id: 4, name : "lenovo LaptoP", price: 17200},
    { id: 5, name : "apple phonE", price: 100200},
    { id: 6, name : "dell lapTop", price: 40200},
]

function searchItem(products, search){
    const matched = []
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched
}

console.log(searchItem(products,"laptop"))