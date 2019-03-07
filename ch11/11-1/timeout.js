const timeout = duration => new Promise((resolve, reject) => {
  setTimeout(() => resolve(), duration)
})

timeout(1000)
  .then(() => { console.log('timeout fired...')})
