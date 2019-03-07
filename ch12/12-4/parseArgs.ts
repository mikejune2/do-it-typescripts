export function parseArgs() {
  let amountOfPeople:number = 10, outputDir='output'
  process.argv.forEach((val, index, array) => {
switch(index) {
      case 2:
        amountOfPeople = parseInt(val, 10)
        break
    }
  })
  return {amountOfPeople, filename:`numberOfPeople${amountOfPeople}.csv`, outputDir}
}
