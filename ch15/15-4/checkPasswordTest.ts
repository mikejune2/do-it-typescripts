import {checkPassword} from './checkPassword'

[{password: '123456'}, {password: '1234'}, {}].forEach((target, index) => {
  const [value, failureReson] = checkPassword(target)
  if(failureReson)
    console.log(index, 'validation fail.', failureReson.toString())
  else
    console.log(index, 'validation ok.', value)
})
