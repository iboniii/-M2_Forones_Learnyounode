const fs = require('fs');
const path = require('path');
const directoryPath = process.argv[2];
const fileExtension = '.' + process.argv[3];
fs.readdir(directoryPath, function callback(err, files) {
    if (err) {
      // Handle any errors
      console.error('Error reading directory:', err);
      return;
    }
    const filteredFiles = files.filter(file => path.extname(file) === fileExtension);
    filteredFiles.forEach(file => console.log(file));
});