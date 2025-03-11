const makeFurniture = type =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(type==='closet'){
                resolve('closet ready')
            }else if(type==='table'){
                reject('not enough wood')
            }else{
                reject('unknown furniture')
            }
        }, 2000);
    })
}

const type = 'closet'
makeFurniture(type)
.then(console.log)
.catch(error=>console.log(error))