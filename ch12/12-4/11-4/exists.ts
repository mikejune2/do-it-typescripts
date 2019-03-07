import * as fs from 'fs'

export const exists = (filepath:string): Promise<boolean> => 
new Promise(resolve => {
  fs.access(filepath, error => {
    resolve(error ? false : true)
  })
})
