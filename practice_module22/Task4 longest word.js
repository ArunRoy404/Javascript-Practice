function longestWord(input){
    const list = input.split(" ")
    let longWord = " ";

    for(word of list){
        if(word.length>longWord.length){
            longWord = word
        }
    }
    return longWord
}

console.log(longestWord("I am learning Programming to become a programmer"))