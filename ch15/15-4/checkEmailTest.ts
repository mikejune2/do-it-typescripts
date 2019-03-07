import {checkEmail} from './checkEmail'

[{email: 'abc@efg.com'},{email: 'abcefg'}].forEach((target, index) => {
  const [value, failureReson] = checkEmail(target)
  if(failureReson)
    console.log(index, 'validation fail.', failureReson.toString())
  else
    console.log(index, 'validation ok.', value)
})
