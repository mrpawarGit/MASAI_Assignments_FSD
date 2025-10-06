"use strict";
function sumE(numbers) {
    let sum = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumE([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 12
console.log(sumE([1, 3, 5, 7, 9])); // Output: 0
