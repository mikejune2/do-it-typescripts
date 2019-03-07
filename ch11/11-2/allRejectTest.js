Promise.all([
  Promise.resolve(1),
Promise.reject('error'),
Promise.resolve(2)
])
.then(result => console.log(result))
.catch(error => console.error(error))
