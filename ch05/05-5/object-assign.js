let part1 = {name: "jane"}, 
    part2 = {age: 22}, 
    part3 = {city: "Seoul", country: "Kr"}

let merged = {} // 반드시 {}로 초기화 되어야 합니다.
Object.assign(merged, part1, part2, part3)
console.log(merged)
