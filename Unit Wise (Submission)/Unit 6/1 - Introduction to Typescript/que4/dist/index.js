"use strict";
function isEven(a) {
    return a % 2 == 0;
}
let result1 = isEven(10);
let result2 = isEven(11);
console.log(result1 ? "Even" : "Odd"); // Even
console.log(result2 ? "Even" : "Odd"); // Odd
