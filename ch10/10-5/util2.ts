const range = (min:number, max:number) =>
  min <= max ? [min, ...range(min+1, max)] : []

const random = (max:number, min:number = 0) =>
  Math.round(Math.random() * (max - min)) + min

export {
  range,
  random
}
