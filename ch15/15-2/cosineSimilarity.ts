import { pipe } from './pipe'
import { vector, multiplyVectors, sum } from './multiplyVectors'
import { dotProduct } from './dotProduct'

const norm = (a:vector) => pipe(
  multiplyVectors(a),
  sum,
  Math.sqrt
)(a)

export const cosineSimilarity = (a:vector, b:vector) => {
  try {
    return dotProduct(a, b) / (norm(a) * norm(b))    
  } catch { return 0 }
}
