import {Cat} from './CatAndDog'
import Cow from './polymorphism2'

[new Cat('tom'), new Cow('sam')].forEach(c => c.say())
