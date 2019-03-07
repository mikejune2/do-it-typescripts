const isPromise = obj => obj && (typeof obj == 'object' && obj["then"] != null)
module.exports = isPromise
