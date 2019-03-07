export default interface IPerson {
  readonly name: string 
  age?: number // 선택 속성
  say(): void
  walk?(): void // 선택 메소드
}
