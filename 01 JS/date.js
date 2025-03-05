const today = new Date()
console.log(today)

const date = new Date('2022-10-25')
console.log(date)

console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())


const newDate = new Date(2000, 10, 14)
console.log(newDate)

newDate.setMonth(2)
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleString('en-GB'))
console.log(today.toLocaleString())


