{class Fish { swim() { console.log(`I'm swimming.`) } }
class Bird { fly() { console.log(`I'm flying.`) } }

const swimOrFly = (o: Fish | Bird) => {
  if(o instanceof Fish)
    (o as Fish).swim()
  else if( o instanceof Bird )    
    (o as Bird).fly()
}
[new Fish, new Bird].forEach(o => swimOrFly(o))}
