setTimeout(() => {
  console.log('1초 경과')
  setTimeout( () => {
    console.log('2초 경과')
    setTimeout(() => {
      console.log('3초 경과')
    }, 1000)
  }, 1000)
}, 1000)
