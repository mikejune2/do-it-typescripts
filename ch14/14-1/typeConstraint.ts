const lengthOnly = <T extends { length: number }>(a: T) => a.length
const plain = (a: any) => a.length

//lengthOnly(true) // error!
plain(true) // no error!
