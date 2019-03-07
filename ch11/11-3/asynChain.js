const inc = async(value) => value + 1

inc(1)
  .then(value => inc(value))
  .then(value => inc(value))
  .then(value => console.log(value))
