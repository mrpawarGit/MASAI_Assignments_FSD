const os = require("os");

function sysData() {
  return `<b>System Platform:</b> ${os.platform} <br>
  <b>Total Memory (in GB):</b> ${(os.totalmem / 1024 ** 3).toFixed(2)} GB <br>
  <b>Free Memory (in GB):</b> ${(os.freemem / 1024 ** 3).toFixed(2)} GB<br>
  <b>CPU Model:</b> ${os.cpus()[0].model}
  `;
}

console.log();

module.exports = sysData;
