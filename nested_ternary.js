var isLeader = true
var price = 1002

price = isLeader ? 
            price>1000 ? 
                price/2 : 0 
        : price
console.log(price)