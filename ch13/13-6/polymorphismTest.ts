import {Cat} from './CatAndDog'
import Cow from './polymorphism'

[new Cat('tom'), new Cow('sam')].forEach(c => c.say())
