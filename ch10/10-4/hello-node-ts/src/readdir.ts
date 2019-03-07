import * as fs from 'fs'

export const readdir = (
  dir:string, 
  filesCB:Function,
  errorCB?: Function
): void => {
  fs.readdir(dir, (error, files) => {
    if(error)
      errorCB && errorCB(error)
    else
      filesCB && filesCB(files)
  })
}
