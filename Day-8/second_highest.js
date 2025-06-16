let a = [13, 11, 2, 3, 4, 5, 12];
let b = Math.max();
for (let i = 0; i <= a.length; i++) {
  if (a[i] > b) {
    b = a[i];
  }
}
let c = Math.max();
for (let i = 0; i <= a.length; i++) {
  if (a[i] < b && a[i] > c) {
    c = a[i];
  }
}
console.log("Second Highest is " + c);