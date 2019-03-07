import {pipe} from './pipe'
import { vector, multiplyVectors, sum } from './multiplyVectors'

export const dotProduct = (a:vector, b:vector) => pipe(
  multiplyVectors(a),
  sum
)(b)
