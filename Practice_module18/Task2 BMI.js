var height = 1.70
var weight = 60

var bmi = weight/(height**2)
console.log(bmi)

// bmi>=18.5 ? bmi>=25 ? bmi>=30 ? console.log("you are obese") : console.log("you are overweight") : console.log("you are normal") : console.log("you are underweight")

bmi>=18.5 ? 
    bmi>=25 ?
        bmi<30 ? console.log("You are overweight") 
            : console.log("You are obese")
        : console.log("You are normal")
    : console.log("You are underweight")
