function add(a: number | string, b: number | string): number {
  const num1 = typeof a === "string" ? parseFloat(a) : a;
  const num2 = typeof b === "string" ? parseFloat(b) : b;

  return num1 + num2;
}

let result1 = add(10, "5");
let result2 = add("3.5", "2.5");
let result3 = add(7, 8);

console.log(result1); // Output: 15
console.log(result2); // Output: 6
console.log(result3); // Output: 15
