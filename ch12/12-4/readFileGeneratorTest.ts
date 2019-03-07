import {readFileGenerator} from './readFileGenerator'

for(let value of readFileGenerator("output/person.csv"))
  console.log('<line>', value, '</line >')
