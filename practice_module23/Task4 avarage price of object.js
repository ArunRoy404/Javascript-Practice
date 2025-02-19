const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function avgPrice(phones){
    let total_price = 0;
    for(const phone of phones){
        total_price += phone.price;
    }
    let avg_price = total_price/phones.length;
    return avg_price;
}

console.log(avgPrice(phones))