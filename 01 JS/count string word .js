function countWords(inputString){
    if(!inputString || typeof inputString != typeof "string") {
        return "Enter a valid string!"
    }

    let i = inputString.length
    let count_words = 0

    if (inputString[0]!=" ") {count_words++}
    if (inputString[i-1]==" ") {i--}


    while(i--){
        if(inputString[i] == " " && inputString[i+1]!=" ") {count_words++}
    }
    return count_words
}



// const inputString =  "DEV ZeroOne is a Next-Gen Programming Learning Platform."
const inputString =  "DEV ZeroOne is a Next-Gen Programming Learning Platform."
console.log(countWords(inputString))