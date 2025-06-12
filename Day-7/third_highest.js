let a = [2, 4, 1, 6, 3, 9, 7];
function find(a) {
  let [first, second, third] = [-Infinity, -Infinity, -Infinity];
  for (let num of a) {
    if (num > first) {
      [third, second, first] = [second, first, num];
    } else if (num > second && num !== first) {
      [third, second] = [second, num];
    } else if (num > third && num !== second && num!==first) {
      third = num;
    }
  }
  return second;
}
console.log(find(a));
