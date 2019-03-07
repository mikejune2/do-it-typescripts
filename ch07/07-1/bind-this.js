function g() { console.log(this )}
let f = g.bind({hello: 1, world: 2})
f()
