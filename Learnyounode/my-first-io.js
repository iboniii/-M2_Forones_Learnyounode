const fs = require('fs');
const filePath = process.argv[2];
const fileContents = fs.readFileSync(filePath, 'utf8');
const numOfNewlines = fileContents.split('\n').length - 1;
console.log(numOfNewlines);