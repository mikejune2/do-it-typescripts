import Cow from './polymorphism2'

const cow = new Cow("sam")
console.log('own properties:', Object.getOwnPropertyNames(cow))
console.log('own methods:', Object.getOwnPropertyNames(Cow.prototype))
