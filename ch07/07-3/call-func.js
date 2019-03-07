function callFunc(func) {
  return func()
}
console.log(callFunc(()=>1))