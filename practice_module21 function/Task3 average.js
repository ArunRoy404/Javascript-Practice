function make_avg(list){
    let sum = 0
    for(const number of list){
        sum+=number
    }
    return sum/list.length
}

const list = [1,2,3,4,5,6,7,8]
console.log(make_avg(list))