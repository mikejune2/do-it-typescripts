import mkdirp from 'mkdirp'
import {exists} from './exists'

export const mkdir = (dirname: string): Promise<any> => 
  new Promise(async (resolve, reject) => {
    const alreadyExists = await exists(dirname)
    alreadyExists ? 
      resolve(dirname) : 
      mkdirp(dirname, 
        error => error ? reject(error) : resolve(dirname)
      )
  })
