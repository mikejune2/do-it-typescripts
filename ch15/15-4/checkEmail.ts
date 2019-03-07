import Validation from './Validation'
const {Success, Failure} = Validation

export const checkEmail = (o) => {
  const checkValidEmailAddress = ({email}) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase()) ? new Success(email) 
      : new Failure(['invalid email address'])
  }
  const result = new Success(a => o)
    .ap(checkValidEmailAddress(o))

  return result.isSuccess ? [result.value, undefined] : [undefined, result.value]
}
