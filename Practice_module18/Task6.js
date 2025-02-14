var price = 20
var age = 1
var discount = 0

discount = age<10? discount = (100*price)/100
                    :age<18? discount = (50*price)/100
                            :age>=60? discount = (15*price)/100
                                     : discount = 0
console.log(discount)