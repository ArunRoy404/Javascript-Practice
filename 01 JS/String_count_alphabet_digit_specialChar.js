function count_char(s){
    let alphabet = 0
    let digit = 0
    let special_char = 0

    // for(char of s){
    //     console.log(typeof char)
    // }

    let charCode
    for(let i=0;i<s.length;i++){
        charCode = s.charCodeAt(i)
        if(charCode>=48 && charCode<=57){
            digit++
        }else if((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)){
            alphabet++
        }else{
            special_char++
        }
    }
    console.log("total alphabet: ",alphabet)
    console.log("total digit:  ",digit)
    console.log("total special_char: ",special_char)
}


count_char("arunroy0065@gmail.com")