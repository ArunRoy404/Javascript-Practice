let num = 81
let sum = 0
while(num<=131){
    if(num%2==1){
        sum+=num
    }
    num++
}
console.log("odd sum: ",sum)

num = 206
sum=0
while(num<=311){
    if(num%2==0){
        sum+=num
    }
    num++
}
console.log("even sum: ",sum)