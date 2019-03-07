enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let dir = Direction.Up

console.log(dir, Direction.Down, Direction.Left, Direction.Right)

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let dir2 = Direction2.Up

console.log(dir2, Direction2.Down, Direction2.Left, Direction2.Right)
