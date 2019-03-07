type Callback0 = () => any
const callFunc = (callback: Callback0) => console.log(callback())

callFunc(()=>'hello')
//callFunc((a, b) => `${a}${b}`)
