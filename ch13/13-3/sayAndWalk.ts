import IPerson from './IPerson'

export default function sayAndWalk(person: IPerson) {
  person.say()
  person.walk && person.walk()
}
