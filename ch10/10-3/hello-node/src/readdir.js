const fs = require('fs')

const readdir = (dir, filesCB ,errorCB) => {
  fs.readdir(dir, (error, files) => {
    if(error)
      errorCB && errorCB(error)
    else
      filesCB && filesCB(files)
  })
}
module.exports = readdir
