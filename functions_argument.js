function add(num1, num2){
    console.log(num1,num2)
    console.log(arguments)
    console.log(arguments[2])

    for(arg of arguments){
        console.log(arg)
    }
}

add(2,3,4,5,6)