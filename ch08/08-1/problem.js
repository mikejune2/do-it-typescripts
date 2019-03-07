const isImgOrInput = tagName => ['img', 'input'].some(tag => tag == tagName)

console.log(
  isImgOrInput('img'),    // true
  isImgOrInput('input'),  // true
  isImgOrInput('a')       // false
)
