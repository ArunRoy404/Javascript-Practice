const mobile = [
    { name : 'samsung', price : 20000, color: 'black'},
    { name : 'xiaomi', price : 15000, color: 'red'},
    { name : 'apple', price : 50000, color: 'white'},
    { name : 'oppo', price : 22000, color: 'blue'},
    { name : 'walton', price : 25000, color: 'purple'},
]

function cheapestPhone(phones){
    let cheapPhone = mobile[0];
    for(const phone of phones){
        if(phone.price<cheapPhone.price){
            cheapPhone = phone
        }
    }
    return cheapPhone;
}

console.log("Cheapest Phone: ",cheapestPhone(mobile))

