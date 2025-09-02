const EventEmitter = require("events");
const { console } = require("inspector");
const emitter = new EventEmitter();

emitter.on("log", (msg) => {
  const timestamp = new Date().toISOString();
  console.log(`[LOG - ${timestamp}] ${msg}`);
});

module.exports = emitter;
