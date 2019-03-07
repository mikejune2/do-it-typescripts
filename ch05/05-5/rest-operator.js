let address = {
  country: "Korea",
  city: "Seoul",
  address1: "Kangname Ku",
  address2: "Sinsa dong 123-456",
  address3: "789 street, 2 Floor ABC building"
}
const {country, city, ...detail} = address
console.log(detail)
