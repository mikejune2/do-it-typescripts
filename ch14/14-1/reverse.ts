import Stack from './Stack'

export const reverse = <T>(array: T[]) : T[] => {
  const st = new Stack<T>(array)
  let result = []
  while(!st.isEmpty()) {
    result = [st.pop(), ...result]
  }
  return result
}
