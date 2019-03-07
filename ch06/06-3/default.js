let x = 5, message = ""

switch(x) {
  case 0:
    message = "x is 0."            
    break
  case 1: case 2: case 3:
    message = "x is less than 4."            
    break
  default:
    message = "x is greater than or equal 4"            
    break      
}
console.log(message)
