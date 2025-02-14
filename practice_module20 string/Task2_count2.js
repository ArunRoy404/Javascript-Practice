const s = "akdapAPDAJDWAPKDA;LKD;ALKa;dka;ld"

var count = 0
for(var letter of s.toLowerCase()){
    if(letter == 'a'){
        count+=1
    }
}

console.log(count)