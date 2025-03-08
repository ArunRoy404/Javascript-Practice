const obj = {
    name: 'x',
    hobby: 'gaming',
    girlfriend: 'sadness',
    // money: -100
}

// if no entries found 
// default value is 0 
const {name, hobby, money=0} = obj
console.log(money)
