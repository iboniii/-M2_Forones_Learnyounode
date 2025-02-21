const mymodule = require('./mymodule.js');
const directoryPath = process.argv[2];
const fileExtension = process.argv[3];
mymodule(directoryPath, fileExtension, function (err, filteredFiles) {
    if (err) {
      // Handle any errors
      console.error('Error:', err);
      return;
    }
    filteredFiles.forEach(file => console.log(file));
});