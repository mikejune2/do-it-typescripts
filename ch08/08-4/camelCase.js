console.log(
  "hello-ALBERT-einSTein"
    .split('-')
    .map(value => value.toLowerCase())
    .map(([first, ...remains], index) => 
[...!index ? first : first.toUpperCase(), ...remains].join(''))
    .join('')
)
