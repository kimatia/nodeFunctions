/*
1.Rest parameter: collects all remaining elements into an array.
2.Spread operator: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.

*/
//rest
function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result
}

console.log(add(1, 2, 3, 4, 5)) // returns 15

//rest parameters 2
function xyz(x, y, ...z) {
  console.log(x, ' ', y); // hey hello

  console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
  console.log(z[0]); // wassup
  console.log(z.length); // 4
}

xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")
//spread
const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];
console.log(newArr);