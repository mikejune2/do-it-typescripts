{interface Square { kind:'square', size: number }
interface Rectangle { kind: 'rectangle', width: number, height: number }
interface Circle { kind: 'circle', radius: number }

type Shape = Square | Rectangle | Circle

function area(s: Shape): number {
  switch(s.kind) {
    case 'square': return s.size * s.size
    case 'rectangle': return s.width * s.height
    case 'circle': return Math.PI * s.radius * s.radius
  }
  return 0
}

[
  area({kind: 'square', size: 10}),
  area({kind: 'rectangle', width: 4, height: 5}),
  area({kind: 'circle', radius: 10}),    
].forEach(r => console.log(r))}
