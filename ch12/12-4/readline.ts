let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('output/person.csv')
})

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
})
