import Validation from './Validation'
const {Success, Failure} = Validation

export const checkPassword = (o) => {
const checkNull = ({password}) => 
(password == undefined || typeof password != 'string') ?
    new Failure(["Password can not be null"]) : new Success(o)
  const checkLength = ({password}) => (!password || password.length < 6) ?
    new Failure(['Password must have more than 6 characters']) : new Success(o)

  const result = new Success(a => b => o)
    .ap(checkNull(o))
    .ap(checkLength(o))

  return result.isSuccess ? [result.value, undefined] : [undefined, result.value]
}
