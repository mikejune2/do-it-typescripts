import {zip} from './zip'
const keys = 'name,age,email,phone'
const values = 'Stella Jordan,47,sozoc@govoknuk.ck,(781) 257-2252'
const delim = ','
const person = zip(keys.split(delim), values.split(delim))
console.log(person)
