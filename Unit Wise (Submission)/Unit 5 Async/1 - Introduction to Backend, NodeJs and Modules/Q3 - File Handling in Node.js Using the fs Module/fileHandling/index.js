const fs = require("fs");

// read
const data = fs.readFileSync("./data.txt", "utf8");
console.log("\nInitial File Content:\n", data);

console.log("\nAppending data... ");

// append / write
fs.appendFileSync("./data.txt", "This is Appended data");

// read agin
const newdata = fs.readFileSync("./data.txt", "utf8");
console.log(newdata);
