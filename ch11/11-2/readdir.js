const fs = require('fs')

const readdir = dir => new Promise((resolve, reject) => {
  fs.readdir(dir, (error, files) =>  error ? reject(error) : resolve(files))
})
module.exports = readdir
