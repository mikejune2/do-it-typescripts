const caller = callback => {
  try {
    callback()
  } catch(e) {
    console.error('caller Error:', e.message)
  }
}
caller(null)
