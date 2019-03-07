const replaceStr = (str, from, to) => 
  str.split(from).map(s => !s.length ? to : s).join('')

console.log([
  replaceStr("1hello1", '1', '~~'),
  replaceStr("11hello11", '1', '~~'),
  replaceStr("111hello111", '1', '~~'),
])
