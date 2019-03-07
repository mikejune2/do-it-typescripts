let address = { country: "Korea",  city: "Seoul", postalCode: '123-456'   } 
let s = address.toString()
let odds = [1, 2, 3, 4].filter(value => value % 2)
let evens = [1, 2, 3, 4].filter(value => value % 2 == 0)
console.log(address, s, odds, evens.toString())
