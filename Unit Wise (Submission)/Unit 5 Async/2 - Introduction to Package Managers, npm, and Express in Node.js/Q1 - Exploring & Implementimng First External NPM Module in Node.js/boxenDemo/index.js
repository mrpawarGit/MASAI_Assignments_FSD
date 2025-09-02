const boxen = require("boxen");

let title = "Hurray!!!";
let msg = "I am using my first external module!";

console.log(boxen(msg, { title: title, titleAlignment: "center" }));
console.log(
  boxen(msg, { title: title, titleAlignment: "center", borderStyle: "double" })
);

console.log(
  boxen(msg, { title: title, titleAlignment: "center", borderStyle: "round" })
);
