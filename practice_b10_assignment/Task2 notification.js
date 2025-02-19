function sendNotification(email) {
    if(email.indexOf("@")==-1){
        return "Invalid Email" 
    }

    const list = email.split("@")
    return list[0] + " sent you an email from " + list[1]
}


const email = "sadia8icloud.com"
console.log(sendNotification(email))