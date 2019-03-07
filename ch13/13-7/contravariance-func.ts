export class LastNamed {
  constructor(public lastName) {}
}

export class FirstNamed extends LastNamed {
  constructor(public firstName, lastName) { super(lastName) }
}

export type All = undefined | LastNamed | FirstNamed
export const createPerson = (...args: string[]): All => args.length == 1 ?
  new LastNamed(args[0]) : 
  args.length > 1 ? new FirstNamed(args[0], args[1]) : undefined
