function countVowels(input){
    let count = 0;
    for(const char of input.toLowerCase()){
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        } 
    }
    return count
}

console.log(countVowels("Write a function to count the number of vowels in a string."))