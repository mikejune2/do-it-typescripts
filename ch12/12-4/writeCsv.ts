import Person from './Person'
import {mkdir} from './11-4/mkdir'
import {deleteFile} from './11-4/deleteFile'
import {appendFile} from './11-4/appendFile'
function* range(min, max) {
  while(min < max)
    yield min++
}

(async (amountOfPeople) => {
  const dirname = await mkdir('output') 
  const filePath = [dirname, 'person.csv'].join('/')
  await deleteFile(filePath) // delete already existing file

  const cr = '\n'
  for(let index of range(1, amountOfPeople+1)) {
    let person = new Person
    if(index == 1) {
      console.log(person.getKeys())
      await appendFile(filePath, person.getKeys())
    }
    console.log(person.getValues())
    await appendFile(filePath, cr + person.getValues())
  }
})(3)
