/**
Q: 15
Title: L2 - Debugging Memory Leak in Closures

Problem Statement:
The following code is designed to handle a large dataset temporarily, but it seems to be causing a memory leak. Even after the dataset is no longer needed, the memory usage remains high. You need to figure out why the closure is holding onto the large dataset and resolve the issue.

Buggy Code:
function createHeavyDataHandler() {

let largeData = new Array(1000000).fill(0); // Large data array

return {

processData: function () {

console.log("Processing data of size:", largeData.length);},

clearData: function () {

console.log("Clearing data");

largeData = null; // Attempt to free memory } }; }

const handler = createHeavyDataHandler();

handler.processData(); // Output: Processing data of size: 1000000
handler.clearData();    // Output: Clearing data

// Despite clearing the data, memory usage remains high. Why is that?
Task:
Investigate why the large data is still retained in memory even after calling clearData().
Modify the code to ensure that the large dataset is properly released and garbage collected.
Use debugging tools such as console.log or memory profiling to inspect the behavior of the closure and identify the source of the memory leak.
Hint: Consider how closures capture and retain references, and why the large data might still be in memory.
 */

function createHeavyDataHandler() {

  let largeData = new Array(1000000).fill(0); // Large data array

  return {

    processData: function () {

      console.log("Processing data of size:", largeData.length);
    },

    clearData: function () {

      console.log("Clearing data");

      largeData = null; // Attempt to free memory 
       
      } }; }

      const handler = createHeavyDataHandler();

      handler.processData(); // Output: Processing data of size: 1000000
      handler.clearData();    // Output: Clearing data

// Despite clearing the data, memory usage remains high. Why is that?