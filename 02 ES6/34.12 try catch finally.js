try{
    console.log('Hello')
    throw new Error('nice error')
}catch(error){
    console.log(error.message)
}finally{
    console.log('end')
}