import {readdir} from './readdir' 
import {createPerson} from './createPerson' 

readdir('.', (files:[string]) => console.log(files))
console.log(createPerson(),createPerson())
