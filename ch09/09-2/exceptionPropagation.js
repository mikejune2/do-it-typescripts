const called = () => {
  throw Error("called function throw this error!")
}
const caller = () => {
  try {
    called()
  } catch(e) { console.error(e.message) } 
  finally { console.log('caller terminated.') }
}

caller()
