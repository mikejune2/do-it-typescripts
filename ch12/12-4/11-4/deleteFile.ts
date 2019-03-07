import * as fs from 'fs'
import {exists} from './exists'

export const deleteFile = (filename: string) : any => 
new Promise<any>(async(resolve, reject) => {
  const alreadyExists = await exists(filename)
  !alreadyExists ?
    resolve(filename) :
    fs.unlink(filename, (error) => {
      error ? reject(error) : resolve(filename)
    })
})
