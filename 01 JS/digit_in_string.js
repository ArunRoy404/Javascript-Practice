const str = "ajhd5454g5dsgsfs55"

function digitInString(str){
    for(const char of str){
        if(char>='0' && char <='9'){
            console.log(char)
        }
    }
}

digitInString(str)