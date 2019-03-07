gen()
.then(values => values.reduce((result, value)=>result + value, 0))
.then(value => console.log(value))

async function gen() {
return await Promise.all([1, 2, 3, 4].map(value => Promise.resolve(value)))
}
