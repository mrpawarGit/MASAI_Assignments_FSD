const path = require("path");

function parseFilePath(filepath) {
  return {
    fileName: path.basename(filepath),
    extension: path.extname(filepath),
    directory: path.dirname(filepath),
  };
}

module.exports = parseFilePath;