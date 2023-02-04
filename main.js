let arr = [1, 4, 8, 10]
const reduced = arr.reduce((currentValue, item) => {
  return currentValue + item
}, 0)

console.log(reduced)
const filtered = arr.filter((item) => {
  return item > 5
})
console.log(filtered)

console.log(reduced)
const filter4 = arr.filter((item) => {
  return item <= 4
})
console.log(filter4)
