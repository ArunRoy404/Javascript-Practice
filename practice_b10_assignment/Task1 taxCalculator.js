function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || expenses>income){
        return "Invalid Input"
    }

    return (income-expenses)*(20/100)
}

console.log(calculateTax(34000,1753))
