export const pipe = (...funcs) => x =>
  funcs.reduce((result, func) => func(result), x)
