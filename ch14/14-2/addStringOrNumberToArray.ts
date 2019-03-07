type NumberOrString = number | string
type NumberOrStringArray = NumberOrString[]

export default function addStringOrNumberToArray(
  ary: NumberOrStringArray,
  ...appendants: NumberOrStringArray) {
    return [...ary, ...appendants]
  }
