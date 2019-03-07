const readdir = require('./readdir')

readdir('..')
  .then(files => console.log(files))
  .catch(error => console.error(error))
