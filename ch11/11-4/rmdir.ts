import rimraf from 'rimraf'
import {exists} from './exists'

export const rmdir = (dirname: string): Promise<any> => 
  new Promise(async (resolve, reject) => {
    const alreadyExists = await exists(dirname)
    alreadyExists ? 
      rimraf(dirname, 
        error => error ? reject(error) : resolve(dirname)
      ) :
      resolve(dirname)
  })
