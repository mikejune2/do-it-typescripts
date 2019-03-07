export function maybeDuckRobust(obj) {
  if(obj && obj["quack"])
    obj.quack()
  else 
    console.error('error: obj should have quack method')
}

maybeDuckRobust({
  quack() { console.log("꽥꽥!")}
})

maybeDuckRobust({
  bark() { console.log("멍멍!")}
})
