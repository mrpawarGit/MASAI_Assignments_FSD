function createHeavyDataHandler() {

  let largeData = new Array(1000000).fill(0); // Large data array

  return {

    processData: function () {
      if (largeData == null) {
        console.log("Null");
        return
      }
      console.log("Processing data of size:", largeData.length);
    },

    clearData: function () {
      console.log("Clearing data");
      largeData = null; // Attempt to free memory 
      delete this.processData;
    }
  };
}

const handler = createHeavyDataHandler();

handler.processData(); // Output: Processing data of size: 1000000
handler.clearData();    // Output: Clearing data