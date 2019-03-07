export const makePerson2 = <
O extends { name: string, age: number }
>({name, age, ...details} : O) => ({name, age, details })
