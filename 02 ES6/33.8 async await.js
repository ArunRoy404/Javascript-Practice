const loadData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json();
    console.log(data)
}

loadData()
console.log("hello")