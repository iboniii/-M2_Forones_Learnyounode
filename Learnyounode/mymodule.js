const fs = require('fs');
const path = require('path');

module.exports = function (directoryPath, fileExtension, callback) {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      // Pass the error to the callback and exit
      return callback(err);
    }
    const filteredFiles = files.filter(file => path.extname(file) === '.' + fileExtension);
    callback(null, filteredFiles);
  });
};