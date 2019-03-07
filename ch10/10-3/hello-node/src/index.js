const readdir = require('./readdir')
const createPerson = require('./createPerson')

readdir('.', files => console.log(files))
console.log(createPerson(),createPerson())
