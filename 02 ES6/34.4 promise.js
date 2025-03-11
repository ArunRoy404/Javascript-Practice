const promise = new Promise((resolve,reject)=>{
    // reject(200)
    resolve({
        name: 'x'
    })
})

promise
.then(console.log)
.catch(error => console.log(error))

promise.then(data => console.log(data.name)).catch(error => console.log(error))


const fetchData = () =>{
    const status = true

    return new Promise((resolve, reject)=>{
        if(status){
            // resolve({
            //     name: 'x',
            //     age: 20
            // })

            // another 
            const mockData = {
                json:() => Promise.resolve({
                    name: 'x',
                    age: 18
                })
            }
            resolve(mockData)

        }else{
            reject("server error")
        }
    })
}

// console.log(fetchData()) // this line makes the function synchronous

// this pce of code is for the commented resolve  
// fetchData()
// .then(console.log)
// .catch(error=>console.log(error.message))

fetchData()
.then(r=>r.json())
.then(console.log)
.catch(e=> console.log(e.message))

console.log('end')
