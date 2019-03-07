class H {
  h() { console.log("H.h() called.")}
}
class I extends H {
  h() { console.log("I.h() called.")}
}
let h: I = new H // contravariance
let i: H = new I // covariance
