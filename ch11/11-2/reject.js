const reject = error => new Promise((_, reject) => reject(error))
module.exports = reject
