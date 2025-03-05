// function isLeap(year){
//     if(!(year%4)&& (year%100)){
//         return true
//     }
//     else if (!(year%400)){
//         return true
//     }
//     return false
// }

function isLeap(year){
    if((year%4===0 && year%100 !==0) || year%400==0){
        return true
    }
    return false
}

console.log(isLeap(2000)); // Expected output: true
console.log(isLeap(1900)); // Expected output: false
console.log(isLeap(2020)); // Expected output: true
console.log(isLeap(2019)); // Expected output: false
console.log(isLeap(400))
console.log(isLeap(100))
