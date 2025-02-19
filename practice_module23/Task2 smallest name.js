function smallName(names){
    let small = names[0]
    for(const name of names){
        if(small.length > name.length){
            small = name
        }
    }
    return small
}
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallName(heights2))