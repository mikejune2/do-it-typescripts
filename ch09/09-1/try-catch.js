try {
  throw new Error("some error here")
} catch(e) {
  console.error('ERROR:', e.message)
}
console.log('program terminated.')