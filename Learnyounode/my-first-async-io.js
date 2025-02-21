const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', function callback(err, data) {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const numOfNewlines = data.split('\n').length - 1;
  console.log(numOfNewlines);
});