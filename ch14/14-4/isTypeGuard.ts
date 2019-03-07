import {Fish, Bird} from './FishAndBird'

function isSwimmable(fishOrBird: Fish | Bird): fishOrBird is Fish {
  return fishOrBird instanceof Fish
} 
const isFlyable = (fishOrBird: Fish | Bird): fishOrBird is Bird => 
  fishOrBird instanceof Bird

const swimOrFly = (o: Fish | Bird) => {
  if(isSwimmable(o))
    o.swim()
  else if(isFlyable(o))
    o.fly()
}
[new Fish, new Bird].forEach(o => swimOrFly(o))
