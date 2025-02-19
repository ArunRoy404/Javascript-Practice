function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || Array.isArray(obj)){
        return "Invalid Input"
    }

    let mark = obj.testScore + obj.schoolGrade + ((obj.isFFamily) ? 20 : 0)
    return (mark>=80)? true : false
}

const obj = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }

console.log(calculateFinalScore(obj))
