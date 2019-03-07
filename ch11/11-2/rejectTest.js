const reject = require('./reject')
reject(new Error('error')).catch(error=> console.error(error.message))
Promise.reject(new Error('error')).catch(error=> console.error(error.message))
