const loadData = async () =>{
    console.log('start')

    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    // console.log(response)
    // console.log(await response.json()) //convert to data 

    // response is pending 
    // const data = response.json()

    //get full data
    const data =await response.json()
    console.log(data)

    console.log('end')
}

loadData()


// normal function 
async function loadData2(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    console.log('end2')
}
loadData2()