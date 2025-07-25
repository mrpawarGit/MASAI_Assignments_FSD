const boxen = require("boxen");

let title = "Hurray!!!";
let msg = "I am using my first external module!";

console.log(
  boxen(`${title}\n${msg}`, {
    padding: 1,
    margin: 1,
    borderStyle: "double",
  })
);
