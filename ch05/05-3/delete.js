let obj = { "state": "ok", "1": "ok", "true": "ok"}
console.log("before delete", obj)
delete obj["state"]
delete obj[1]
delete obj[true]
console.log("after delete", obj)
