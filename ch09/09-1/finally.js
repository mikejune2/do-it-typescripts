try {
  throw new Error("Error occurs.")
} catch(e) {
  console.error(e.message)
} finally {
  console.log('program terminated.')
}
