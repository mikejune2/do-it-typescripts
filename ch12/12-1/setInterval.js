const period = 1000
let count = 5
const id = setInterval(() => {
  if(!count--) {
    clearInterval(id)
  }
  else
    console.log(count)
}, period)
