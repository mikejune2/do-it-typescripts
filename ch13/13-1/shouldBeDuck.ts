export interface Duck {
  quack()
}

export function shouldBeDuck(duck: Duck) {
  duck.quack()
}
