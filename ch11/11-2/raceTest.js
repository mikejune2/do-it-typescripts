const promises = [1, 2, 3, 4, 5].map(n => Promise.resolve(n))

Promise.race(promises).then(result => console.log(result))
