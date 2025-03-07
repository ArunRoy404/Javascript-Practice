// accessing a inner function of an outer function 
// only calling the outer function once

const setCounter = (name) =>{
    let counter = 0;
    console.log(`${name} counter set`)

    const count = () => {
        counter++;
        console.log(counter)
    }
    // here returning the inner function so that it can be called 
    return count
}

const x = setCounter('x')
x()
x()
x()
x()

const y = setCounter('y')
y()
y()
y()