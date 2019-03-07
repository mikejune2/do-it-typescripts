let x = 1
let desc = ''

if(!x)
  desc = 'started'
else if( x < 3)
  desc = 'during execution...'
else
  desc = 'stopped'

console.log(desc)
