const throwError = async () => await Promise.reject('error')

throwError()
  .catch(error => console.error(error))
