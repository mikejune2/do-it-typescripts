errorExample()
console.log('program terminated.')

function errorExample() {
  if(false == job1()) {
    console.log("job1 error.")
    return
  }
  if(!job2()) {
    console.log("job2 error.")
    return
  }
}
function job1() { return false }
function job2() { return true }
