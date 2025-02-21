const http = require('http');
const url = process.argv[2];
http.get(url, (response) => {
  let collectedData = '';
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    collectedData += chunk;
  });
  response.on('end', () => {
    console.log(collectedData.length); 
    console.log(collectedData);       
  });
  response.on('error', (err) => {
    console.error('Error:', err.message);
  });
});