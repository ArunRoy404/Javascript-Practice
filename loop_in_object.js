const person = {
    name : 'Arun',
    hoddy : "playing games",
    profession : 'developer',
    salary : 30000,
    fav_food : ["biriyani", "khichuri", "fruit"],
    "address" : "dhaka",
    exam : {
        'final exam' : 'bangla',
    },
    unique : {
        color : 'red',
        dev : {
            list : ["kola", "mango", "jaam"]
        }
    }
}

for(key in person){
    console.log(key)
}