const resolve = require('./resolve')
resolve(1).then(value => console.log(value))
Promise.resolve(1).then(value => console.log(value))
