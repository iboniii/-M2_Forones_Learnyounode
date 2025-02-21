const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]);
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
  fileStream.on('error', (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('File not found or cannot be read.\n');
  });
});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
