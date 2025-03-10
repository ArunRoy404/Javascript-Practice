const loadData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.jon(); //error here
        console.log(data)
    }catch(error){
        console.log("The Error: "+error)
    }
}

loadData()