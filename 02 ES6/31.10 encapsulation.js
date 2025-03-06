class Person {
    status
    #bankBalance
    constructor(name, status, bankBalance){
        this.name = name
        this.status =status
        this.#bankBalance = bankBalance
    }
    balance(){
        console.log(`Bank balance of ${this.name} is ${this.#bankBalance}.
        it can only be shown with this function. 
        The balance can not be accessed outside the class object`)
    }
    currentStatus(){
        console.log(this.status)
    }
    setBalance(balance){
        this.#bankBalance = balance
    }
    getBalance(){
        return this.#bankBalance
    }
}


const x = new Person('x', 'single', 0)
x.currentStatus()
x.balance()

// can change status 
x.status = 'mingle'
x.currentStatus()


// it will show undefined 
console.log(x.bankBalance) 
// but in balance function the current balance can be shown 



// can not change or access bankBalance 
x.bankBalance = 100
// it shows the balance is 100. but inside the object real bankBalance is 0. lol
console.log(x.bankBalance)
x.balance()

// the only proper way is to set or get price is to use function
console.log(x.getBalance())

x.setBalance(1000)
console.log(x.getBalance())
x.balance()