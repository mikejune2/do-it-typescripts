let s = "hello world!, hello world!"
let firstIndex = s.indexOf("world") 
let lastIndex = s.lastIndexOf("world") 
let substr = s.substr(firstIndex, lastIndex - firstIndex)
console.log(substr)
