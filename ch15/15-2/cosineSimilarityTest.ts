import { cosineSimilarity } from './cosineSimilarity'

let sentence_m = [1, 1, 1, 1, 0, 0, 0, 0, 0] 
let sentence_h = [0, 0, 1, 1, 1, 1, 0, 0, 0]
let sentence_w = [0, 0, 0, 1, 0, 0, 1, 1, 1]

console.log(cosineSimilarity(sentence_m, sentence_h)) // 0.5
console.log(cosineSimilarity(sentence_m, sentence_w)) // 0.25
