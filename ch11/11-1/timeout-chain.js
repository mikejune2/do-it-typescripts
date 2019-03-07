const timeout = duration => new Promise((resolve, reject) => {
  setTimeout(() => resolve(), duration)
})

timeout(1000)
  .then(_ => {
    console.log('1초 경과')
    return timeout(1000)
  })
  .then(_ => {
    console.log('2초 경과')
    return timeout(1000)
  })
  .then(_ => {
    console.log('3초 경과')
    return timeout(1000)
  })
