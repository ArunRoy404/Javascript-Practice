const products = [
    { name: "Laptop", category : "Electronics"},
    { name: "T-shirt", category : "Clothing"},
    { name: "Headphone", category : "Electronics"},
    { name: "Jeans", category : "Clothing"},
]

let products2 = {}
for(const object of products){
    let name = object.name
    let category = object.category

    if(!(category in products2)){
        products2[category] = []
        products2[category].push(name)
    }else{
        products2[category].push(name)
    }
}
console.log(products2)
