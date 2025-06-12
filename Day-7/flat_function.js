a = [3, 4, [[[4, 5]], 9], [[7]]];
// console.log(typeof a)
let b = [];
function flatt(a) {
  for (let i = 0; i <= a.length - 1; i++) {
    if (typeof a[i] === "object") {
      flatt(a[i]);
    } else {
      b.push(a[i]);
    }
  }
  return b;
}
console.log(flatt(a));
