const person = {
    name: 'x',
    hobby: 'gaming',
    details: {
        nationality: 'bangladeshi',
        father: 'a',
        mother: 'b',
        likes: {
            eating: 'chicken',
            playing: 'game'
        }
    }
}

// undefined cause liking do not exist.
// ok cause it returns undefined 
// console.log(person.details.liking)


// but since liking do not exist so there is no doing attribute inside liking
// the code will throw an error and crash
// console.log(person.details.liking.doing)

// to prevent this issue
// we use ? like a ternary operation 
console.log(person.details?.likes?.eating)
//the undefined comes from the liking and it did not reached to doing
console.log(person.details?.liking?.doing) 
