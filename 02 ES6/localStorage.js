const showCart = () => {
    const cartList = document.getElementById('cart-list')
    cartList.innerHTML = ``
    const cart = JSON.parse(localStorage.getItem("cart"))
    for(const product in cart){
        const li = document.createElement('li')
        li.innerHTML = `${product}: ${cart[product]}`
        cartList.append(li)
    }
}
showCart()

const getCartFromLocalStorage = () => {
    let cart = {}
    let isCart = localStorage.getItem('cart')
    if(isCart){
        cart = JSON.parse(isCart)
    }
    return cart
}

const addToLocalStorage = (product, quantity) => {
    const cart = getCartFromLocalStorage()
    cart[product] = quantity
    const cartJson = JSON.stringify(cart)
    localStorage.setItem("cart", cartJson)
}

const handleAddToCart = () => {
    const productName = document.getElementById('add-product-name').value
    const quantity = document.getElementById('quantity').value

    document.getElementById('add-product-name').value = ''
    document.getElementById('quantity').value = ''
    if(productName!=='' || quantity!==''){
        addToLocalStorage(productName, quantity)
        showCart()
    }
}

const handleClearCart = () => {
    localStorage.removeItem("cart")
    showCart()
}

const handleRemove = () =>{
    const product = document.getElementById('remove-product-name').value
    document.getElementById('remove-product-name').value = ''
    const cart = getCartFromLocalStorage()
    delete cart[product]
    const jsonCart = JSON.stringify(cart)
    localStorage.setItem("cart", jsonCart)
    showCart()
}




// not that good code 
// used array to store all objects, 
// as a result duplicate objects in array 


// const handleClearCart = () => {
//     localStorage.clear()
//     console.log(localStorage)
//     showCart()
// }

// const showCart = () => {
//     const cart = JSON.parse(localStorage.getItem('cart'))
//     const cartList = document.getElementById('cart-list')
//     cartList.innerHTML = ``
//     if(!cart) return
//     cart.forEach(element => {
//         const li = document.createElement('li')
//         li.innerHTML = `${element.product}: ${element.quantity}`
//         cartList.append(li)
//     });
// }
// showCart()

// const addToLocalStorage = (product) => {
//     // localStorage.setItem(productName,quantity)
//     console.log(product)

//     let cart = localStorage.getItem("cart")
//     if(!cart){
//         cart = []
//     }else{
//         cart = JSON.parse(cart)
//     }
//     cart.push(product)
//     const newCart = JSON.stringify(cart)
//     localStorage.setItem("cart", newCart)
//     showCart()
// }

// const handleAddToCart = () => {
//     const productName = document.getElementById('add-product-name').value
//     const quantity = document.getElementById('quantity').value
//     if (productName !== "" || quantity !== "") {
//         const product = {
//             "product": productName,
//             "quantity": quantity
//         }
//         addToLocalStorage(product)
//     }
// }

// const handleRemove = () =>{
//     const productName = document.getElementById('remove-product-name').value
//     let cart = JSON.parse(localStorage.getItem('cart'))
//     cart = cart.filter(element => element.product !== productName)
//     cart = JSON.stringify(cart)
//     localStorage.setItem("cart", cart)
//     showCart()
// }
